<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentParticipantVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentParticipantVM

**Namespace:** SandBox.ViewModelCollection.Tournament
**Module:** SandBox.ViewModelCollection
**Type:** `public class TournamentParticipantVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Tournament/TournamentParticipantVM.cs`

## 概述

`TournamentParticipantVM` 位于 `SandBox.ViewModelCollection.Tournament`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Tournament` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Participant` | `public TournamentParticipant Participant { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `IsDead` | `public bool IsDead { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `TeamColor` | `public Color TeamColor { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `State` | `public int State { get; set; }` |
| `IsQualifiedForNextRound` | `public bool IsQualifiedForNextRound { get; set; }` |
| `Score` | `public string Score { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Character` | `public CharacterViewModel Character { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Refresh
`public void Refresh(TournamentParticipant participant, Color teamColor)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** 执行 `open encyclopedia` 操作或流程。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

## 使用示例

```csharp
var value = new TournamentParticipantVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)