 --Table: public.article

DROP TABLE public.article;

CREATE TABLE public.article
(
  quantity float,
  typeProd text,
  description text,
  sku integer NOT NULL DEFAULT nextval('article_sku_seq'::regclass),
  category text,
  parcialCost float,
  priceParcial float,
  CONSTRAINT sku PRIMARY KEY (sku)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.article
  OWNER TO root;