---
title: "ConversationTagHelper"
description: "Auto-generated class reference for ConversationTagHelper."
---
# ConversationTagHelper

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ConversationTagHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/Tags/ConversationTagHelper.cs`

## Overview

`ConversationTagHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ConversationTagHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### UsesHighRegister
`public static bool UsesHighRegister(CharacterObject character)`

**Purpose:** Executes the UsesHighRegister logic.

```csharp
// Static call; no instance required
ConversationTagHelper.UsesHighRegister(character);
```

### UsesLowRegister
`public static bool UsesLowRegister(CharacterObject character)`

**Purpose:** Executes the UsesLowRegister logic.

```csharp
// Static call; no instance required
ConversationTagHelper.UsesLowRegister(character);
```

### TribalVoiceGroup
`public static bool TribalVoiceGroup(CharacterObject character)`

**Purpose:** Executes the TribalVoiceGroup logic.

```csharp
// Static call; no instance required
ConversationTagHelper.TribalVoiceGroup(character);
```

### EducatedClass
`public static bool EducatedClass(CharacterObject character)`

**Purpose:** Executes the EducatedClass logic.

```csharp
// Static call; no instance required
ConversationTagHelper.EducatedClass(character);
```

### TraitCompatibility
`public static int TraitCompatibility(Hero hero1, Hero hero2, TraitObject trait)`

**Purpose:** Executes the TraitCompatibility logic.

```csharp
// Static call; no instance required
ConversationTagHelper.TraitCompatibility(hero1, hero2, trait);
```

## Usage Example

```csharp
ConversationTagHelper.Initialize();
```

## See Also

- [Area Index](../)