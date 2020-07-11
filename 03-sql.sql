CREATE TABLE FBUser (
  ps_ID TEXT PRIMARY KEY NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  profile_pic VARCHAR(250),
  locale VARCHAR(8) NOT NULL,
  gender VARCHAR(50),
  timezone_number SMALLINT,
  created_at TIMESTAMP DEFAULT current_timestamp() NOT NULL,
  updated_at TIMESTAMP DEFAULT current_timestamp() NOT NULL,
  ad_id INTEGER NOT NULL,
  FOREIGN KEY (ad_id) REFERENCES Ad (ad_id)
);
CREATE TABLE Ad (
  ad_id INTEGER NOT NULL,
  source VARCHAR(20),
  type VARCHAR(20),
  PRIMARY KEY (ad_id)
)
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now();
RETURN NEW;
END;
$$ language 'plpgsql';
CREATE TRIGGER update_updated_at_column BEFORE
UPDATE ON FBUser FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();