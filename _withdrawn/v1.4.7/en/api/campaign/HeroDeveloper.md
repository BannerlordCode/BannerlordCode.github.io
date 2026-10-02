---
title: "HeroDeveloper"
description: "HeroDeveloper — class in TaleWorlds.CampaignSystem.CharacterDevelopment. 29 public members (0 static)."
---

<!-- v147-skeleton -->
# HeroDeveloper

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class HeroDeveloper`  
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

## Overview

`HeroDeveloper` is a named type in the TaleWorlds.CampaignSystem.CharacterDevelopment namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (29): `IsDeveloperInitialized`, `TotalXp`, `GetSkillXpProgress`, `GetSkillXp`, `ClearUnspentPoints`, `ResetCharacterStats`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddAttribute` | method | Instance entry point. Takes 3 arguments: `CharacterAttribute attrib`, `int changeAmount`, `bool checkUnspentPoints`. Adds to the collection or relation this type owns. |
| `AddFocus` | method | Instance entry point. Takes 3 arguments: `SkillObject skill`, `int changeAmount`, `bool checkUnspentFocusPoints`. Adds to the collection or relation this type owns. |
| `AddPerk` | method | Instance entry point. Takes 1 argument: `PerkObject perk`. Adds to the collection or relation this type owns. |
| `AddSkillXp` | method | Instance entry point. Takes 4 arguments: `SkillObject skill`, `float rawXp`, `bool isAffectedByFocusFactor`, `bool shouldNotify`. Adds to the collection or relation this type owns. |
| `AfterLoad` | method | Instance entry point. Takes no arguments. |
| `CanAddFocusToSkill` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ChangeSkillLevel` | method | Instance entry point. Takes 3 arguments: `SkillObject skill`, `int changeAmount`, `bool shouldNotify`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CheckLevel` | method | Instance entry point. Takes 1 argument: `bool shouldNotify`. |
| `ClearHero` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ClearUnspentPoints` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `DevelopCharacterStats` | method | Instance entry point. Takes no arguments. |
| `GetFocus` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetFocusFactor` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetPerkValue` | method | Instance entry point. Takes 1 argument: `PerkObject perk`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetRequiredFocusPointsToAddFocus` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetSkillXp` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetSkillXpProgress` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetTotalSkillPoints` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetXpRequiredForLevel` | method | Instance entry point. Takes 1 argument: `int level`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `InitializeHeroDeveloper` | method | Instance entry point. Takes no arguments. |
| `InitializeSkillXp` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. |
| `IsDeveloperInitialized` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `RemoveAttribute` | method | Instance entry point. Takes 2 arguments: `CharacterAttribute attrib`, `int changeAmount`. Removes from or clears the collection this type owns. |
| `RemoveFocus` | method | Instance entry point. Takes 2 arguments: `SkillObject skill`, `int changeAmount`. Removes from or clears the collection this type owns. |

5 further public members follow the same patterns.
## Usage Example

```csharp
// HeroDeveloper is read through its properties:
//   IsDeveloperInitialized : bool
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [Attributes](../Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/campaign/](../) — the other types in this bucket.
