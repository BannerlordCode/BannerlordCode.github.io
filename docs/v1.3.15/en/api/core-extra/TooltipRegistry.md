<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipRegistry`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipRegistry

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `TooltipRegistry` is a struct in the `TaleWorlds.Library` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` |


## Key Methods

### IsAnyInquiryActive

```csharp
public static bool IsAnyInquiryActive()
```

### DisplayMessage

```csharp
public static void DisplayMessage(InformationMessage message)
```

### HideAllMessages

```csharp
public static void HideAllMessages()
```

### ClearAllMessages

```csharp
public static void ClearAllMessages()
```

### AddSystemNotification

```csharp
public static void AddSystemNotification(string message)
```

### ShowTooltip

```csharp
public static void ShowTooltip(Type type, params object args)
```

### HideTooltip

```csharp
public static void HideTooltip()
```

### ShowInquiry

```csharp
public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)
```

### ShowTextInquiry

```csharp
public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)
```

### HideInquiry

```csharp
public static void HideInquiry()
```

### GetIsAnyTooltipActive

```csharp
public static bool GetIsAnyTooltipActive()
```

### GetIsAnyTooltipActiveAndExtended

```csharp
public static bool GetIsAnyTooltipActiveAndExtended()
```

### Clear

```csharp
public static void Clear()
```

### IsAnyTooltipActiveDelegate

```csharp
public delegate void IsAnyTooltipActiveDelegate(out bool isAnyTooltipActive, out bool isAnyTooltipExtended)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)