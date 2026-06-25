---
title: "PropertyBasedTooltipVM"
description: "PropertyBasedTooltipVM 的自动生成类参考。"
---
# PropertyBasedTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs`

## 概述

`PropertyBasedTooltipVM` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TooltipPropertyList` | `public MBBindingList<TooltipProperty> TooltipPropertyList { get; set; }` |
| `Mode` | `public int Mode { get; set; }` |

## 主要方法

### AddKeyType
`public static void AddKeyType(string keyID, Func<string> getKeyText)`

**用途 / Purpose:** 将 「key type」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PropertyBasedTooltipVM.AddKeyType("example", getKeyText);
```

### GetKeyText
`public string GetKeyText(string keyID)`

**用途 / Purpose:** 读取并返回当前对象中 「key text」 的结果。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
var result = propertyBasedTooltipVM.GetKeyText("example");
```

### RefreshGenericPropertyBasedTooltip
`public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object args)`

**用途 / Purpose:** 使 「generic property based tooltip」 的显示或缓存与底层状态保持一致。

```csharp
// 静态调用，不需要实例
PropertyBasedTooltipVM.RefreshGenericPropertyBasedTooltip(propertyBasedTooltip, args);
```

### AddProperty
`public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 将 「property」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddProperty("example", "example", 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddModifierProperty
`public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 将 「modifier property」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddModifierProperty("example", 0, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddProperty
`public void AddProperty(string definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 将 「property」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddProperty("example", value, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddProperty
`public void AddProperty(Func<string> definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 将 「property」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddProperty(definition, value, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddColoredProperty
`public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 将 「colored property」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddColoredProperty("example", "example", color, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddColoredProperty
`public void AddColoredProperty(string definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 将 「colored property」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddColoredProperty("example", value, color, 0, tooltipProperty.TooltipPropertyFlags.None);
```

### AddColoredProperty
`public void AddColoredProperty(Func<string> definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 将 「colored property」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PropertyBasedTooltipVM 实例
PropertyBasedTooltipVM propertyBasedTooltipVM = ...;
propertyBasedTooltipVM.AddColoredProperty(definition, value, color, 0, tooltipProperty.TooltipPropertyFlags.None);
```

## 使用示例

```csharp
PropertyBasedTooltipVM.AddKeyType("example", getKeyText);
```

## 参见

- [本区域目录](../)