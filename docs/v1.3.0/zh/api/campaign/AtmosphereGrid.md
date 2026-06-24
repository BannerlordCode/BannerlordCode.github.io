<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AtmosphereGrid`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AtmosphereGrid

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AtmosphereGrid`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/AtmosphereGrid.cs`

## 概述

`AtmosphereGrid` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetInterpolatedStateInfo
`public AtmosphereState GetInterpolatedStateInfo(Vec3 pos)`

**用途 / Purpose:** 获取 `interpolated state info` 的当前值。

## 使用示例

```csharp
var value = new AtmosphereGrid();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)