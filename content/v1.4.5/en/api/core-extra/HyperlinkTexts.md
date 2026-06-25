---
title: "HyperlinkTexts"
description: "Auto-generated class reference for HyperlinkTexts."
---
# HyperlinkTexts

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class HyperlinkTexts`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/HyperlinkTexts.cs`

## Overview

`HyperlinkTexts` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSettlementHyperlinkText
`public static TextObject GetSettlementHyperlinkText(string link, TextObject settlementName)`

**Purpose:** Reads and returns the settlement hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetSettlementHyperlinkText("example", settlementName);
```

### GetKingdomHyperlinkText
`public static TextObject GetKingdomHyperlinkText(string link, TextObject kingdomName)`

**Purpose:** Reads and returns the kingdom hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetKingdomHyperlinkText("example", kingdomName);
```

### GetHeroHyperlinkText
`public static TextObject GetHeroHyperlinkText(string link, TextObject heroName)`

**Purpose:** Reads and returns the hero hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetHeroHyperlinkText("example", heroName);
```

### GetConceptHyperlinkText
`public static TextObject GetConceptHyperlinkText(string link, TextObject conceptName)`

**Purpose:** Reads and returns the concept hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetConceptHyperlinkText("example", conceptName);
```

### GetClanHyperlinkText
`public static TextObject GetClanHyperlinkText(string link, TextObject clanName)`

**Purpose:** Reads and returns the clan hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetClanHyperlinkText("example", clanName);
```

### GetShipHyperlinkText
`public static TextObject GetShipHyperlinkText(string link, TextObject shipHullName)`

**Purpose:** Reads and returns the ship hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetShipHyperlinkText("example", shipHullName);
```

### GetUnitHyperlinkText
`public static TextObject GetUnitHyperlinkText(string link, TextObject unitName)`

**Purpose:** Reads and returns the unit hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetUnitHyperlinkText("example", unitName);
```

### GetGenericHyperlinkText
`public static string GetGenericHyperlinkText(string link, string name)`

**Purpose:** Reads and returns the generic hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetGenericHyperlinkText("example", "example");
```

### GetGenericImageText
`public static string GetGenericImageText(string meshId, int extend = 0)`

**Purpose:** Reads and returns the generic image text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetGenericImageText("example", 0);
```

### GetKeyHyperlinkText
`public static string GetKeyHyperlinkText(string keyID, float overrideExtendScale = 1f)`

**Purpose:** Reads and returns the key hyperlink text value held by the this instance.

```csharp
// Static call; no instance required
HyperlinkTexts.GetKeyHyperlinkText("example", 0);
```

## Usage Example

```csharp
HyperlinkTexts.GetSettlementHyperlinkText("example", settlementName);
```

## See Also

- [Area Index](../)