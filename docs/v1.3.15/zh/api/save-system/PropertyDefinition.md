<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PropertyDefinition`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyDefinition

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** `public class PropertyDefinition : MemberDefinition`
**Base:** `MemberDefinition`
**领域:** save-system

## 概述

`PropertyDefinition` 位于 `TaleWorlds.SaveSystem.Definition`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PropertyInfo` | `public PropertyInfo PropertyInfo { get; }` |
| `SaveablePropertyAttribute` | `public SaveablePropertyAttribute SaveablePropertyAttribute { get; }` |
| `GetMethod` | `public MethodInfo GetMethod { get; }` |
| `SetMethod` | `public MethodInfo SetMethod { get; }` |
| `GetPropertyValueMethod` | `public GetPropertyValueDelegate GetPropertyValueMethod { get; }` |

## 主要方法

### GetMemberType
`public override Type GetMemberType()`

**用途 / Purpose:** 获取 `member type` 的当前值。

### GetValue
`public override object GetValue(object target)`

**用途 / Purpose:** 获取 `value` 的当前值。

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(GetPropertyValueDelegate getPropertyValueMethod)`

**用途 / Purpose:** 初始化 `for auto generation` 的状态、资源或绑定。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 PropertyDefinition 实例，再调用它的公开方法
var value = new PropertyDefinition();
value.GetMemberType();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
