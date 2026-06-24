<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeNotableSpawnModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeNotableSpawnModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `StoryMode/GameComponents/StoryModeNotableSpawnModel.cs`

## Overview

`StoryModeNotableSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeNotableSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTargetNotableCountForSettlement
`public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**Purpose:** Gets the current value of `target notable count for settlement`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeNotableSpawnModel>(new MyStoryModeNotableSpawnModel());
```

## See Also

- [Complete Class Catalog](../catalog)