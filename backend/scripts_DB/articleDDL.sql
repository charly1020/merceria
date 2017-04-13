 --Table: public.article

DROP TABLE public.article;

CREATE TABLE public.article
(
  name text,
  id integer NOT NULL DEFAULT nextval('article_id_seq'::regclass),
  description text,
  CONSTRAINT id PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.article
  OWNER TO root;