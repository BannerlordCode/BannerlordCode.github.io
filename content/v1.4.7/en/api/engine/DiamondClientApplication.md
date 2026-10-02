---
title: "DiamondClientApplication"
description: "DiamondClientApplication — class in TaleWorlds.Diamond.ClientApplication. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# DiamondClientApplication

**Namespace:** `TaleWorlds.Diamond.ClientApplication`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class DiamondClientApplication`  
**Source:** `TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs`

## Overview

`DiamondClientApplication` is a named type in the TaleWorlds.Diamond.ClientApplication namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `DiamondClientApplication`, `DiamondClientApplication`.
- **Instance members** (7): `ApplicationVersion`, `Parameters`, `GetObject`, `AddObject`, `Initialize`, `CreateClientSessionProvider`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddObject` | method | Instance entry point. Takes 2 arguments: `string name`, `DiamondClientApplicationObject applicationObject`. Adds to the collection or relation this type owns. |
| `ApplicationVersion` | property | Instance entry point `ApplicationVersion` property. Read it for current state; a declared setter writes that state in place. |
| `CreateClientSessionProvider` | method | Instance entry point. Takes 4 arguments: `string clientName`, `Type clientType`, `SessionProviderType sessionProviderType`, `ParameterContainer parameters`. Returns `object`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `GetObject` | method | Instance entry point. Takes 1 argument: `string name`. Returns `object`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method | Instance entry point. Takes 1 argument: `ClientApplicationConfiguration applicationConfiguration`. |
| `Parameters` | property | Instance entry point `ParameterContainer` property. Read it for current state; a declared setter writes that state in place. |
| `Update` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `DiamondClientApplication` | ctor | Instance entry point. Takes 2 arguments: `ApplicationVersion applicationVersion`, `ParameterContainer parameters`. Returns ``. |
| `DiamondClientApplication` | ctor | Instance entry point. Takes 1 argument: `ApplicationVersion applicationVersion`. Returns ``. |

- Constructed as `public DiamondClientApplication(ApplicationVersion applicationVersion, ParameterContainer parameters)`.
- Constructed as `public DiamondClientApplication(ApplicationVersion applicationVersion)`.

## Usage Example

```csharp
var diamondClientApplication = new DiamondClientApplication(applicationVersion, parameters);
diamondClientApplication.GetObject(name);
// Read current state through diamondClientApplication.ApplicationVersion.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Diamond/ClientApplication/DiamondClientApplication.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Client](../Client/) — `TaleWorlds.Diamond`.
- [DiamondClientApplicationObject](../DiamondClientApplicationObject/) — `TaleWorlds.Diamond.ClientApplication`.
- [ClientApplicationConfiguration](../ClientApplicationConfiguration/) — `TaleWorlds.Diamond.ClientApplication`.
- [SessionProviderType](../SessionProviderType/) — `TaleWorlds.Diamond.ClientApplication`.
- [GenericRestSessionProvider](../GenericRestSessionProvider/) — `TaleWorlds.Diamond.ClientApplication`.
- [GenericThreadedRestSessionProvider](../GenericThreadedRestSessionProvider/) — `TaleWorlds.Diamond.ClientApplication`.
- [IHttpDriver](../../core-extra/IHttpDriver/) — `TaleWorlds.Library.Http`.
- [HttpDriverManager](../../core-extra/HttpDriverManager/) — `TaleWorlds.Library.Http`.

Section: [api/engine/](../) — the other types in this bucket.
