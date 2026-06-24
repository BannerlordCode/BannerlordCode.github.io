<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionStealthFailCounterVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionStealthFailCounterVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionStealthFailCounterVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout/MissionStealthFailCounterVM.cs`

## 概述

`MissionStealthFailCounterVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CountDownText` | `public string CountDownText { get; set; }` |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime { get; set; }` |
| `FailCounterMaxTime` | `public float FailCounterMaxTime { get; set; }` |
| `IsCounterActive` | `public bool IsCounterActive { get; set; }` |

## 主要方法

### UpdateFailCounter
`public void UpdateFailCounter(float failCounterElapsedTime, float failCounterMaxTime, bool isStealthFailCounterMissionLogicActive)`

**用途 / Purpose:** 更新 `fail counter` 的状态或数据。

## 使用示例

```csharp
var value = new MissionStealthFailCounterVM();
value.UpdateFailCounter(0, 0, false);
```

## 参见

- [完整类目录](../catalog)