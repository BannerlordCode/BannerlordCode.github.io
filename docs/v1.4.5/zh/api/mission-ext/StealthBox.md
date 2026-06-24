<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthBox`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthBox

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StealthBox : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/StealthBox.cs`

## 概述

`StealthBox` 位于 `TaleWorlds.MountAndBlade.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsPointInside
`public bool IsPointInside(Vec3 point)`

**用途 / Purpose:** 处理 `is point inside` 相关逻辑。

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**用途 / Purpose:** 处理 `is agent inside` 相关逻辑。

## 使用示例

```csharp
var value = new StealthBox();
value.IsPointInside(point);
```

## 参见

- [完整类目录](../catalog)