<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DelayedStateChanger`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DelayedStateChanger

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DelayedStateChanger : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs`

## 概述

`DelayedStateChanger` 位于 `TaleWorlds.GauntletUI.ExtraWidgets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.ExtraWidgets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AutoStart` | `public bool AutoStart { get; set; }` |
| `Trigger` | `public bool Trigger { get; set; }` |
| `StateResetable` | `public bool StateResetable { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `Delay` | `public float Delay { get; set; }` |
| `State` | `public string State { get; set; }` |
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |

## 主要方法

### Start
`public void Start()`

**用途 / Purpose:** 处理 `start` 相关逻辑。

## 使用示例

```csharp
var value = new DelayedStateChanger();
value.Start();
```

## 参见

- [完整类目录](../catalog)