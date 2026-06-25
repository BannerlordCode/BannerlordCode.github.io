---
title: "SettlementMusicData"
description: "Auto-generated class reference for SettlementMusicData."
---
# SettlementMusicData

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class SettlementMusicData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `SandBox/Objects/SettlementMusicData.cs`

## Overview

`SettlementMusicData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SettlementMusicData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MusicPath` | `public string MusicPath { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `Instruments` | `public MBReadOnlyList<InstrumentData> Instruments { get; }` |
| `LocationId` | `public string LocationId { get; }` |
| `Tempo` | `public int Tempo { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of SettlementMusicData from the subsystem API first
SettlementMusicData settlementMusicData = ...;
settlementMusicData.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SettlementMusicData entry = ...;
```

## See Also

- [Area Index](../)