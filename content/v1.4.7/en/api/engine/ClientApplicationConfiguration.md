---
title: "ClientApplicationConfiguration"
description: "ClientApplicationConfiguration — class in TaleWorlds.Diamond.ClientApplication. 10 public members (2 static)."
---

<!-- v147-skeleton -->
# ClientApplicationConfiguration

**Namespace:** `TaleWorlds.Diamond.ClientApplication`  
**Module:** `TaleWorlds.Diamond`  
**Type:** `public class ClientApplicationConfiguration`  
**Source:** `TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs`

## Overview

`ClientApplicationConfiguration` is a named type in the TaleWorlds.Diamond.ClientApplication namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClientApplicationConfiguration`.
- **Static entry points** (2): `GetDefaultConfigurationFromFile`, `SetDefaultConfigurationCategory`.
- **Instance members** (7): `Name`, `InheritFrom`, `Clients`, `SessionProviderType`, `Parameters`, `FillFrom`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDefaultConfigurationFromFile` | method (static) | Static entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `SetDefaultConfigurationCategory` | method (static) | Static entry point. Takes 1 argument: `string category`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Clients` | property | Instance entry point `string[]` property. Read it for current state; a declared setter writes that state in place. |
| `FillFrom` | method | Instance entry point. Takes 1 argument: `string configurationName`. |
| `FillFrom` | method | Instance entry point. Takes 2 arguments: `string configurationCategory`, `string configurationName`. |
| `InheritFrom` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Parameters` | property | Instance entry point `ParameterContainer` property. Read it for current state; a declared setter writes that state in place. |
| `SessionProviderType` | property | Instance entry point `SessionProviderType` property. Read it for current state; a declared setter writes that state in place. |
| `ClientApplicationConfiguration` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public ClientApplicationConfiguration()`.

## Usage Example

```csharp
// Static entry points on ClientApplicationConfiguration:
ClientApplicationConfiguration.GetDefaultConfigurationFromFile();
ClientApplicationConfiguration.SetDefaultConfigurationCategory(category);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Diamond/ClientApplication/ClientApplicationConfiguration.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SessionProviderType](../SessionProviderType/) — `TaleWorlds.Diamond.ClientApplication`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/engine/](../) — the other types in this bucket.
