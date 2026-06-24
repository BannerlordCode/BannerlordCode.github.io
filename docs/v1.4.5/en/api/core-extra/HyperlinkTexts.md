<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HyperlinkTexts`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HyperlinkTexts

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class HyperlinkTexts`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/HyperlinkTexts.cs`

## Overview

`HyperlinkTexts` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSettlementHyperlinkText
`public static TextObject GetSettlementHyperlinkText(string link, TextObject settlementName)`

**Purpose:** Gets the current value of `settlement hyperlink text`.

### GetKingdomHyperlinkText
`public static TextObject GetKingdomHyperlinkText(string link, TextObject kingdomName)`

**Purpose:** Gets the current value of `kingdom hyperlink text`.

### GetHeroHyperlinkText
`public static TextObject GetHeroHyperlinkText(string link, TextObject heroName)`

**Purpose:** Gets the current value of `hero hyperlink text`.

### GetConceptHyperlinkText
`public static TextObject GetConceptHyperlinkText(string link, TextObject conceptName)`

**Purpose:** Gets the current value of `concept hyperlink text`.

### GetClanHyperlinkText
`public static TextObject GetClanHyperlinkText(string link, TextObject clanName)`

**Purpose:** Gets the current value of `clan hyperlink text`.

### GetShipHyperlinkText
`public static TextObject GetShipHyperlinkText(string link, TextObject shipHullName)`

**Purpose:** Gets the current value of `ship hyperlink text`.

### GetUnitHyperlinkText
`public static TextObject GetUnitHyperlinkText(string link, TextObject unitName)`

**Purpose:** Gets the current value of `unit hyperlink text`.

### GetGenericHyperlinkText
`public static string GetGenericHyperlinkText(string link, string name)`

**Purpose:** Gets the current value of `generic hyperlink text`.

### GetGenericImageText
`public static string GetGenericImageText(string meshId, int extend = 0)`

**Purpose:** Gets the current value of `generic image text`.

### GetKeyHyperlinkText
`public static string GetKeyHyperlinkText(string keyID, float overrideExtendScale = 1f)`

**Purpose:** Gets the current value of `key hyperlink text`.

## Usage Example

```csharp
HyperlinkTexts.GetSettlementHyperlinkText("example", settlementName);
```

## See Also

- [Complete Class Catalog](../catalog)