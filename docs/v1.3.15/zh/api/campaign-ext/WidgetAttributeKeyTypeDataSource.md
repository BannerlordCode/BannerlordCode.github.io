<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetAttributeKeyTypeDataSource`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetAttributeKeyTypeDataSource

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeKeyTypeDataSource : WidgetAttributeKeyType`
**Base:** `WidgetAttributeKeyType`
**File:** `TaleWorlds.GauntletUI.Data/WidgetAttributeKeyTypeDataSource.cs`

## 概述

`WidgetAttributeKeyTypeDataSource` 位于 `TaleWorlds.GauntletUI.Data`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Data` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CheckKeyType
`public override bool CheckKeyType(string key)`

**用途 / Purpose:** 处理 `check key type` 相关逻辑。

### GetKeyName
`public override string GetKeyName(string key)`

**用途 / Purpose:** 获取 `key name` 的当前值。

### GetSerializedKey
`public override string GetSerializedKey(string key)`

**用途 / Purpose:** 获取 `serialized key` 的当前值。

## 使用示例

```csharp
var value = new WidgetAttributeKeyTypeDataSource();
value.CheckKeyType("example");
```

## 参见

- [完整类目录](../catalog)