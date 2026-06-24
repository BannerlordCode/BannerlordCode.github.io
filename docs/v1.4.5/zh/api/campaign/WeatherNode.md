<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeatherNode`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeatherNode

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeatherNode`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/WeatherNode.cs`

## 概述

`WeatherNode` 位于 `TaleWorlds.CampaignSystem.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisuallyDirty` | `public bool IsVisuallyDirty { get; }` |

## 主要方法

### SetVisualDirty
`public void SetVisualDirty()`

**用途 / Purpose:** 设置 `visual dirty` 的值或状态。

### OnVisualUpdated
`public void OnVisualUpdated()`

**用途 / Purpose:** 当 `visual updated` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new WeatherNode();
value.SetVisualDirty();
```

## 参见

- [完整类目录](../catalog)