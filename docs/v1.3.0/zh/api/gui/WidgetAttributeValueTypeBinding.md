<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetAttributeValueTypeBinding`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetAttributeValueTypeBinding

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeValueTypeBinding : WidgetAttributeValueType`
**Base:** `WidgetAttributeValueType`
**File:** `TaleWorlds.GauntletUI.Data/WidgetAttributeValueTypeBinding.cs`

## 概述

`WidgetAttributeValueTypeBinding` 位于 `TaleWorlds.GauntletUI.Data`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Data` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CheckValueType
`public override bool CheckValueType(string value)`

**用途 / Purpose:** 处理 `check value type` 相关逻辑。

### GetAttributeValue
`public override string GetAttributeValue(string value)`

**用途 / Purpose:** 获取 `attribute value` 的当前值。

### GetSerializedValue
`public override string GetSerializedValue(string value)`

**用途 / Purpose:** 获取 `serialized value` 的当前值。

## 使用示例

```csharp
var value = new WidgetAttributeValueTypeBinding();
value.CheckValueType("example");
```

## 参见

- [完整类目录](../catalog)