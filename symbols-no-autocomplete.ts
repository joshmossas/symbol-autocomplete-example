import { a } from "@arrirpc/schema";
import { Type } from "@sinclair/typebox";

const ArriUser = a.object({
  id: a.string(),
  name: a.string(),
  email: a.string(),
});

// ArriUser.metadata.[SCHEMA_METADATA] does not autocomplete

const TypeboxUser = Type.Object({
  id: Type.String(),
  name: Type.String(),
  email: Type.String(),
});

// TypeboxUser.[Kind] will not autocomplete here
