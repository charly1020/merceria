 --Table: public.article

DROP TABLE public.article;

CREATE TABLE public.article
(
  quantity float,
  typeProd text,
  description text,
  sku text,
  id Long NOT NULL DEFAULT nextval('article_id'::regclass),
  category text,
  parcialCost float,
  priceParcial float,
  costo double,
  precio double,
  CONSTRAINT id PRIMARY KEY (id)

)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.article
  OWNER TO root;