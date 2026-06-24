<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMusicData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new SettlementMusicData();
```

## See Also

- [Complete Class Catalog](../catalog)