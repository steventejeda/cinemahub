\echo 'Delete and recreate cinemahub db?'
\prompt 'Return for yes or control-C to cancel > ' 

DROP DATABASE cinemahub;
CREATE DATABASE cinemahub;
\connect cinemahub

\i cinemahub-schema.sql