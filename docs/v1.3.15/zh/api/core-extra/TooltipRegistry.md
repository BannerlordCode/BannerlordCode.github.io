<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipRegistry`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipRegistry

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`TooltipRegistry` 是 `TaleWorlds.Library` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` |


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)