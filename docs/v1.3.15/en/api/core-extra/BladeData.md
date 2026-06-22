<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BladeData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BladeData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class BladeData : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BladeData.cs`

## Overview

`BladeData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### Deserialize
```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode childNode)
```

## Usage Example

```csharp
// Typical usage of BladeData (Data)
new BladeData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)