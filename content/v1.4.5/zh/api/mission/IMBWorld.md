---
title: "IMBWorld"
description: "全局世界状态的 11 个原生绑定：get_game_type 从不被调用——因为 MBCommon.CurrentGameType 是托管静态字段的镜像，读时问镜像、写时才通知原生。"
---

# IMBWorld

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal interface IMBWorld`（`[ScriptingInterfaceBase]`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBWorld.cs`

## 概述

`IMBWorld` 是 11 个 `[EngineMethod]` 绑定的纯声明接口——**零方法体**，实现落在 `Bannerlord.Native.dll`（**不在源码树**）。形态是 `get_` 3 个 / `set_` 4 个 / 动词名 4 个，`[ScriptingInterfaceBase]` 标记在 `:5`。

**11 个绑定里 9 个有托管调用点，2 个没有** —— 而其中一个的成因与 [IMBAgent](../IMBAgent/) 的 `get_look_agent` 完全同构：**getter 被托管镜像顶替，setter 才通知原生。**

## 心智模型

把它当成**「全局世界开关」**。三条推论：

第一,**`get_game_type`（`:15`）在托管侧从未被调用，因为 `MBCommon.CurrentGameType` 的 getter 读的是托管静态字段。** `MBCommon.cs:28-37`：getter 是 `return _currentGameType;`（`:32`），而 setter 是 `_currentGameType = value;`（`:36`）**之后**才调 `MBAPI.IMBWorld.SetGameType((int)value)`（`:37`）。**⇒ 写入托管、再写原生；读取只读托管。** 这与 `Agent.GetLookAgent()`（`Agent.cs:2870` 读 `_lookAgentCache`）是同一个模式。

第二,**这意味着「当前游戏类型」在托管侧与原生侧可能不一致。** 只要原生侧单方面改了这个值，托管侧的 `MBCommon.CurrentGameType` 不会知道。**而它有真实消费点**：`GameNetwork.cs:628` 就是靠 `MBCommon.GameType` 的枚举值区分 `MultiServer` / `MultiClientServer`。

第三,`get_last_messages`（`:12`）是另一个无调用点的绑定，形参为空、返回 `string`。**我不断言它是否被 native 侧使用。**

## 如何使用

**怎么拿到它**：经 `MBAPI.IMBWorld` 间接到达，**编译期 mod 拿不到**。它的消费方 `MBCommon` 是 `public static class`（`MBCommon.cs`），所以只能静态访问。

复现「getter 读镜像、setter 写原生」这个不对称（这是本页全部结论的来源）：

```csharp
using TaleWorlds.MountAndBlade;

// MBCommon.cs:28-37
//   public static GameType CurrentGameType {
//     get { return _currentGameType; }                 // :32  ← 读托管静态字段 _currentGameType (:26)
//     set { _currentGameType = value;                  // :36  ← 先写镜像
//           MBAPI.IMBWorld.SetGameType((int)value); }   // :37  ← 再通知原生
//   }
// 而 IMBWorld.cs:15 的 int GetGameType() 从未被调用
//
// 注意写入顺序：镜像先、原生后 —— 若 SetGameType 抛异常，镜像已经改了
MBCommon.GameType before = MBCommon.CurrentGameType;
MBCommon.CurrentGameType = MBCommon.GameType.MultiClientServer;
Debug.Print("before=" + before + " after=" + MBCommon.CurrentGameType, 0);
```

**用它最容易踩的一条**：**`MBCommon.CurrentGameType` 是镜像读，不是原生读。** 如果原生侧单方面改了游戏类型（切场景、加载 mod 改配置等），**托管侧会一直返回旧值**，而 `GameNetwork.cs:628` 正是靠它决定走 `MultiServer` 还是 `MultiClientServer` 分支 —— **⇒ 分支可能选错，且没有任何告警。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `[ScriptingInterfaceBase]` | `IMBWorld.cs:5` | 标记为可脚本化，见 [ScriptingInterfaceBase](../ScriptingInterfaceBase/)。 |
| 11 个 `[EngineMethod]` 绑定 | `[EngineMethod("native_name", false, null, false)]` + 签名 | `get_` 3 / `set_` 4 / 动词 4。**9 个有托管调用点，2 个没有。** **11 个里只有 `GetGlobalTime`（`:9`）带 `MBCommon.TimeType` 形参，其余全是无指针的全局操作** —— 这与 [IMBAgent](../IMBAgent/)（241/245 含 `UIntPtr`）形态相反。 |
| `GetGameType` | `[EngineMethod("get_game_type", …)] int GetGameType()`（`:15`） | **被托管镜像顶替。** `MBCommon.cs:32` 的 getter `return _currentGameType;` **不调用本绑定**；而 `:37` 的 setter **确实调用** `MBAPI.IMBWorld.SetGameType((int)value)`（对应 `IMBWorld.cs:18`）。**⇒ 绑定成对存在，只有读的那一半是死的。** |
| `SetGameType` | `[EngineMethod("set_game_type", …)] void SetGameType(int gameType)`（`:18`） | **有托管调用点**：`MBCommon.cs:37`。**注意它与 getter 的形参不对称** —— 原生给 `int`，托管侧给的是 `MBCommon.GameType` 枚举（`:36` 的 `value`，`:37` 强转 `(int)value`）。 |
| `GetLastMessages` | `[EngineMethod("get_last_messages", …)] string GetLastMessages()`（`:12`） | **无托管调用点。** 形参为空、返回 `string`。**我不断言它是否被 native 侧消费** —— 只陈述托管侧没有任何调用。 |
| `GetGlobalTime` | `[EngineMethod("get_global_time", …)] float GetGlobalTime(MBCommon.TimeType timeType)`（`:9`） | **有托管调用点，且是本接口唯一带枚举形参的绑定。** `MBCommon.cs:59` 是 `GetGlobalTime(TimeType.Application)`、`:64` 是 `GetGlobalTime(TimeType.Mission)` —— **⇒ 原生侧区分「应用时间」与「任务时间」，托管侧两个都要。** |

## 真实示例

九个有调用点的绑定与两个无调用点的对照（这是本页的核心结论）：

```csharp
// 有托管调用点的 9 个，全部集中在 MBCommon.cs（7 次）与 MBUnusedResourceManager.cs（3 次）：
//   :9  GetGlobalTime(TimeType)      -> MBCommon.cs:59（Application）、:64（Mission）
//   :18 SetGameType(int)             -> MBCommon.cs:37
//   :21 PauseGame()                  -> MBCommon.cs:48
//   :24 UnpauseGame()                -> MBCommon.cs:54
//   :27 SetMeshUsed(string) / :30 SetTerrainDynamicParams ... 等
//   FixSkeletons() / CheckResourceModifications()  -> MBCommon.cs:69、:74
// 无托管调用点的 2 个：
//   :12 GetLastMessages()
//   :15 GetGameType()   ← 被 MBCommon.cs:32 的镜像 getter 顶替
Debug.Print("2 个无调用点：1 个零包装、1 个被镜像顶替", 0);
```

镜像与原生的不对称点（对照 [IMBAgent](../IMBAgent/) 的 `get_look_agent`，同构）：

```csharp
// IMBAgent:   Agent.GetLookAgent()  -> Agent.cs:2870  return _lookAgentCache;   唯一写入点 Agent.cs:2447
// IMBWorld:   MBCommon.CurrentGameType -> MBCommon.cs:32 return _currentGameType; 唯一写入点 MBCommon.cs:36
// 两处的 setter 都是「先写镜像、再调原生」：
//   Agent.cs:2447-2448   _lookAgentCache = agent;  MBAPI.IMBAgent.SetLookAgent(...)
//   MBCommon.cs:36-37   _currentGameType = value;  MBAPI.IMBWorld.SetGameType((int)value)
// ⇒ 写入顺序：镜像先、原生后。原生侧若抛异常，镜像已经改了 —— 两处都是同一个顺序
Debug.Print("两处镜像都是「先写镜像再写原生」", 0);
```

## 风险与边界

- **`internal interface`，编译期不可引用。** 实现全在 `Bannerlord.Native.dll`，**不在源码树**。**本页没有一条断言来自原生实现。**
- **`get_game_type` 绑定的读侧是死的。** `MBCommon.cs:32`。**⇒ 托管与原生可能不一致，而 `GameNetwork.cs:628` 依赖它。**
- **镜像先、原生后。** `MBCommon.cs:36` 先于 `:37`；`Agent.cs:2447` 先于 `:2448`。**原生调用抛异常时，镜像已经被改过了。** 我**没有读原生调用的异常行为**（它在 dll 里），所以不断言这是否真会出问题。
- **`GetGameType` 与 `SetGameType` 形参不对称。** 原生侧是 `int`，托管侧是 `MBCommon.GameType` 枚举（`:36`/`:37` 的强转）。**所以枚举值与原生数字的对应关系只在 `MBCommon` 一处定义。**
- **`get_last_messages` 无托管调用点。** `:12`。**我不断言它是否在 native 侧被使用。**
- **11 个绑定里 10 个不带指针。** 只有 `GetGlobalTime`（`:9`）带 `MBCommon.TimeType`。**⇒ 本接口操作的是全局状态，不是某个 mission/agent 对象。**
- **调用点只跨 2 个文件。** `MBCommon.cs` 7 次、`MBUnusedResourceManager.cs` 3 次 —— **集中度高于 [IMBNetwork](../IMBNetwork/) 的 3 文件、也高于 [IMBMission](../IMBMission/) 的 3 文件。**
- **`FixSkeletons()` 与 `CheckResourceModifications()` 的原生名我没有逐个核对行号**，页里只给了消费点文件，故不断言它们在 `IMBWorld.cs` 的确切位置。

## 参见

- 标记它可脚本化的特性：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)
- 托管侧唯一消费方：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBCommon.cs`（`:26` 镜像字段、`:28-37` 属性、`:59`/`:64` 两个 `GetGlobalTime` 调用点）、`MBUnusedResourceManager.cs`（3 次）
- 镜像消费点：`GameNetwork.cs:628`（用 `MBCommon.GameType` 选 `MultiServer` / `MultiClientServer`）
- 同构对照：[IMBAgent](../IMBAgent/)（`get_look_agent` / `get_mount_agent` 同样是「getter 读镜像、setter 写原生」）
- 形态对照：[IMBNetwork](../IMBNetwork/)（两个绑定被硬编码 `false` 顶替）、[IMBMission](../IMBMission/)（3 个 `get_` 零包装）
- 桶首页：[mission API 分区](../)