<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPAuthenticationVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPAuthenticationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAuthenticationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication/MPAuthenticationVM.cs`

## 概述

`MPAuthenticationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Authentication` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsLoginRequestActive` | `public bool IsLoginRequestActive { get; set; }` |
| `CanTryLogin` | `public bool CanTryLogin { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `MessageText` | `public string MessageText { get; set; }` |
| `ExitText` | `public string ExitText { get; set; }` |
| `LoginText` | `public string LoginText { get; set; }` |
| `CommunityGamesText` | `public string CommunityGamesText { get; set; }` |
| `AuthenticationDebug` | `public MPAuthenticationDebugVM AuthenticationDebug { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### ExecuteExit
`public void ExecuteExit()`

**用途 / Purpose:** 执行 `exit` 操作或流程。

### ExecuteLogin
`public async void ExecuteLogin()`

**用途 / Purpose:** 执行 `login` 操作或流程。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

## 使用示例

```csharp
var value = new MPAuthenticationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)