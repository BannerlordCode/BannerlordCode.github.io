<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedParameters`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedParameters

**命名空间:** TaleWorlds.CampaignSystem
**模块:** TaleWorlds.CampaignSystem
**类型:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**领域:** core-extra

## 概述

`ManagedParameters` 位于 `TaleWorlds.CampaignSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static ManagedParameters Instance { get; }` |

## 主要方法

### Initialize
`public void Initialize(string relativeXmlPath)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetManagedParameter
`public bool GetManagedParameter(ManagedParametersEnum _managedParametersEnum)`

**用途 / Purpose:** 获取 `managed parameter` 的当前值。

### SetManagedParameter
`public bool SetManagedParameter(ManagedParametersEnum _managedParametersEnum, bool value)`

**用途 / Purpose:** 设置 `managed parameter` 的值或状态。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ManagedParameters 实例，再调用它的公开方法
var value = new ManagedParameters();
value.Initialize("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
