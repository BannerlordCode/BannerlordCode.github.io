<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GOGAchievement`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GOGAchievement

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GOGAchievement`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/GOGAchievement.cs`

## 概述

`GOGAchievement` 位于 `TaleWorlds.PlatformService.GOG`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.PlatformService.GOG` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AchievementName` | `public string AchievementName { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Achieved` | `public bool Achieved { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |

## 使用示例

```csharp
var example = new GOGAchievement();
```

## 参见

- [完整类目录](../catalog)