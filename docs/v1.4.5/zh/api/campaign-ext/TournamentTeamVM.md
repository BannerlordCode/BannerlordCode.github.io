<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentTeamVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentTeamVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentTeamVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentTeamVM.cs`

## 概述

`TournamentTeamVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Participants` | `public List<TournamentParticipantVM> Participants { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `Score` | `public int Score { get; set; }` |
| `Participant1` | `public TournamentParticipantVM Participant1 { get; set; }` |
| `Participant2` | `public TournamentParticipantVM Participant2 { get; set; }` |
| `Participant3` | `public TournamentParticipantVM Participant3 { get; set; }` |
| `Participant4` | `public TournamentParticipantVM Participant4 { get; set; }` |
| `Participant5` | `public TournamentParticipantVM Participant5 { get; set; }` |
| `Participant6` | `public TournamentParticipantVM Participant6 { get; set; }` |
| `Participant7` | `public TournamentParticipantVM Participant7 { get; set; }` |
| `Participant8` | `public TournamentParticipantVM Participant8 { get; set; }` |
| `Count` | `public int Count { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Initialize
`public void Initialize(TournamentTeam team)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### GetParticipants
`public IEnumerable<TournamentParticipantVM> GetParticipants()`

**用途 / Purpose:** 获取 `participants` 的当前值。

## 使用示例

```csharp
var value = new TournamentTeamVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)