---
title: "CharacterData"
description: "Auto-generated class reference for CharacterData."
---
# CharacterData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterData`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterData.cs`

## Overview

`CharacterData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CharacterData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ExportCharacter
`public static void ExportCharacter(Hero hero, string path)`

**Purpose:** Executes the ExportCharacter logic.

```csharp
// Static call; no instance required
CharacterData.ExportCharacter(hero, "example");
```

### ImportCharacter
`public static void ImportCharacter(Hero hero, string path)`

**Purpose:** Executes the ImportCharacter logic.

```csharp
// Static call; no instance required
CharacterData.ImportCharacter(hero, "example");
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CharacterData entry = ...;
```

## See Also

- [Area Index](../)