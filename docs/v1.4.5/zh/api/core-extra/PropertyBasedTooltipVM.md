<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PropertyBasedTooltipVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PropertyBasedTooltipVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/PropertyBasedTooltipVM.cs`

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

**用途 / Purpose:** 向当前集合/状态中添加 `key type`。

### GetKeyText
`public string GetKeyText(string keyID)`

**用途 / Purpose:** 获取 `key text` 的当前值。

### RefreshGenericPropertyBasedTooltip
`public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object args)`

**用途 / Purpose:** 刷新 `generic property based tooltip` 的显示或缓存。

### AddProperty
`public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `property`。

### AddModifierProperty
`public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `modifier property`。

### AddProperty
`public void AddProperty(string definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `property`。

### AddProperty
`public void AddProperty(Func<string> definition, Func<string> value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `property`。

### AddColoredProperty
`public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `colored property`。

### AddColoredProperty
`public void AddColoredProperty(string definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `colored property`。

### AddColoredProperty
`public void AddColoredProperty(Func<string> definition, Func<string> value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)`

**用途 / Purpose:** 向当前集合/状态中添加 `colored property`。

## 使用示例

```csharp
PropertyBasedTooltipVM.AddKeyType("example", getKeyText);
```

## 参见

- [完整类目录](../catalog)