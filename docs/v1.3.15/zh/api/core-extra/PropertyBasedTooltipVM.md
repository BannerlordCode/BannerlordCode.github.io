<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PropertyBasedTooltipVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyBasedTooltipVM

**命名空间:** TaleWorlds.Core.ViewModelCollection.Information
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`PropertyBasedTooltipVM` 是 `TaleWorlds.Core.ViewModelCollection.Information` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TooltipPropertyList` | `public MBBindingList<TooltipProperty> TooltipPropertyList { get; set; }` |
| `Mode` | `public int Mode { get; set; }` |


## 主要方法

### AddKeyType

```csharp
public static void AddKeyType(string keyID, Func<string> getKeyText)
```

### GetKeyText

```csharp
public string GetKeyText(string keyID)
```

### RefreshGenericPropertyBasedTooltip

```csharp
public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object args)
```

### AddProperty

```csharp
public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddModifierProperty

```csharp
public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddProperty

```csharp
public void AddProperty(string definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddProperty

```csharp
public void AddProperty(Func<string> definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddColoredProperty

```csharp
public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddColoredProperty

```csharp
public void AddColoredProperty(string definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

### AddColoredProperty

```csharp
public void AddColoredProperty(Func<string> definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)