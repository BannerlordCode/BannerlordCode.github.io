---
title: "ConversationTagHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationTagHelper`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationTagHelper

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ConversationTagHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ConversationTagHelper.cs`

## Overview

`ConversationTagHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ConversationTagHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### UsesHighRegister
`public static bool UsesHighRegister(CharacterObject character)`

**Purpose:** Handles logic related to `uses high register`.

### UsesLowRegister
`public static bool UsesLowRegister(CharacterObject character)`

**Purpose:** Handles logic related to `uses low register`.

### TribalVoiceGroup
`public static bool TribalVoiceGroup(CharacterObject character)`

**Purpose:** Handles logic related to `tribal voice group`.

### EducatedClass
`public static bool EducatedClass(CharacterObject character)`

**Purpose:** Handles logic related to `educated class`.

### TraitCompatibility
`public static int TraitCompatibility(Hero hero1, Hero hero2, TraitObject trait)`

**Purpose:** Handles logic related to `trait compatibility`.

## Usage Example

```csharp
ConversationTagHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)