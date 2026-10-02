---
title: "CharacterCreationContent"
description: "CharacterCreationContent — class in TaleWorlds.CampaignSystem.CharacterCreationContent. 26 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationContent

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class CharacterCreationContent`  
**Source:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs`

## Overview

`CharacterCreationContent` is a named type in the TaleWorlds.CampaignSystem.CharacterCreationContent namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationContent`.
- **Instance members** (25): `SelectedTitleType`, `SelectedParentOccupation`, `DefaultSelectedTitleType`, `ReviewPageDescription`, `MainCharacterName`, `SelectedCulture`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddCharacterCreationCulture` | method | Instance entry point. Takes 3 arguments: `CultureObject culture`, `int focusToAddByCulture`, `int skillLevelToAddByCulture`. Adds to the collection or relation this type owns. |
| `AddEquipmentToUseGetter` | method | Instance entry point. Takes 1 argument: `CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate`. Adds to the collection or relation this type owns. |
| `ApplyCulture` | method | Instance entry point. Takes 1 argument: `CharacterCreationManager characterCreationManager`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplySkillAndAttributeEffects` | method | Instance entry point. Takes 11 arguments: `List<SkillObject> skills`, `int focusToAdd`, `int skillLevelToAdd`, `CharacterAttribute attribute`, …. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `AttributeLevelToAdd` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ChangeReviewPageDescription` | method | Instance entry point. Takes 1 argument: `TextObject reviewPageDescription`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `DefaultSelectedTitleType` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `FocusToAdd` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `GetCultures` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<CultureObject>`. Read path: prefer it over reaching for the backing store. |
| `GetFocusToAddByCulture` | method | Instance entry point. Takes 1 argument: `CultureObject culture`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetSkillLevelToAddByCulture` | method | Instance entry point. Takes 1 argument: `CultureObject culture`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `MainCharacterName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `ReviewPageDescription` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `SelectedBanner` | property | Instance entry point `Banner` property. Read it for current state; a declared setter writes that state in place. |
| `SelectedCulture` | property | Instance entry point `CultureObject` property. Read it for current state; a declared setter writes that state in place. |
| `SelectedParentOccupation` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SelectedTitleType` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SetMainCharacterName` | method | Instance entry point. Takes 1 argument: `string name`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetMainClanBanner` | method | Instance entry point. Takes 1 argument: `Banner banner`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetParentOccupation` | method | Instance entry point. Takes 1 argument: `string occupationType`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSelectedCulture` | method | Instance entry point. Takes 2 arguments: `CultureObject culture`, `CharacterCreationManager characterCreationManager`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SkillLevelToAdd` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `StartingAge` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `TryGetEquipmentIdDelegate` | method | Instance entry point. Takes 2 arguments: `string occupationId`, `out string equipmentId`. Returns `delegate bool`. Read path: prefer it over reaching for the backing store. |

- Constructed as `public CharacterCreationContent()`.

2 further public members follow the same patterns.
## Usage Example

```csharp
var characterCreationContent = new CharacterCreationContent();
characterCreationContent.AddCharacterCreationCulture(culture, focusToAddByCulture, skillLevelToAddByCulture);
// Read current state through characterCreationContent.SelectedTitleType.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [HeroDeveloper](../HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [CharacterCreationManager](../CharacterCreationManager/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [Attributes](../Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/campaign/](../) — the other types in this bucket.
