<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TooltipProperty`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TooltipProperty

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class TooltipProperty : ViewModel, ISerializableObject`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs`

## 概述

`TooltipProperty` 位于 `TaleWorlds.Core.ViewModelCollection.Information`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core.ViewModelCollection.Information` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnlyShowWhenExtended` | `public bool OnlyShowWhenExtended { get; set; }` |
| `OnlyShowWhenNotExtended` | `public bool OnlyShowWhenNotExtended { get; set; }` |
| `TextHeight` | `public int TextHeight { get; set; }` |
| `TextColor` | `public Color TextColor { get; set; }` |
| `DefinitionLabel` | `public string DefinitionLabel { get; set; }` |
| `ValueLabel` | `public string ValueLabel { get; set; }` |
| `PropertyModifier` | `public int PropertyModifier { get; set; }` |

## 主要方法

### RefreshValue
`public void RefreshValue()`

**用途 / Purpose:** 刷新 `value` 的显示或缓存。

### RefreshDefinition
`public void RefreshDefinition()`

**用途 / Purpose:** 刷新 `definition` 的显示或缓存。

### DeserializeFrom
`public void DeserializeFrom(IReader reader)`

**用途 / Purpose:** 处理 `deserialize from` 相关逻辑。

### SerializeTo
`public void SerializeTo(IWriter writer)`

**用途 / Purpose:** 处理 `serialize to` 相关逻辑。

## 使用示例

```csharp
var value = new TooltipProperty();
value.RefreshValue();
```

## 参见

- [完整类目录](../catalog)