<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InformationData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InformationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class InformationData`
**Base:** none
**File:** `TaleWorlds.Core/InformationData.cs`

## Overview

`InformationData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public abstract TextObject TitleText { get; }` |
| `SoundEventPath` | `public abstract string SoundEventPath { get; }` |

## Key Methods

### IsValid
```csharp
public virtual bool IsValid()
```

## Usage Example

```csharp
// Typical usage of InformationData (Data)
new InformationData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)