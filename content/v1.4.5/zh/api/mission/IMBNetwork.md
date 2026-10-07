---
title: "IMBNetwork"
description: "网络层的 44 个原生绑定：其中 is_dedicated_server 与 get_multiplayer_disabled 两个绑定在托管侧从未被调用——因为 GameNetwork 把它们硬编码成了 false。"
---

# IMBNetwork

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal interface IMBNetwork`（`[ScriptingInterfaceBase]`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBNetwork.cs`

## 概述

`IMBNetwork` 是 44 个 `[EngineMethod]` 绑定的纯声明接口——**零方法体**，实现落在 `Bannerlord.Native.dll`（**不在源码树**）。形态是 `get_` 4 个 / `set_` 3 个 / 动词名 37 个，`[ScriptingInterfaceBase]` 标记在 `:5`。

**44 个绑定里 38 个有托管调用点，6 个没有** —— 而这 6 个里有两个是本会话至今对 modder 最有杀伤力的发现。

## 心智模型

把它当成**「联机网络层的原生控制面」**。三条推论：

第一,**`is_dedicated_server`（`:12`）这个绑定在托管侧从未被调用，因为 `GameNetwork.IsDedicatedServer` 被硬编码成了常量。** `GameNetwork.cs:353` 是一行表达式属性：`public static bool IsDedicatedServer => false;`。**而这个属性有 6 个真实消费点**：`GameNetwork.cs:628`（用它选 `MultiServer` 还是 `MultiClientServer`）、`:737`，以及 `ChatBox.cs:265`、`:280`、`:460`、`DestructableComponent.cs:447`。

第二,**同样的形态在 `get_multiplayer_disabled`（`:9`）上重演。** `GameNetwork.cs:355` 是 `public static bool MultiplayerDisabled => false;`，同样硬编码，同样零调用原生。**它有一个消费点**：`Module.cs:490` 的 `if (!GameNetwork.MultiplayerDisabled)`。

第三,**所以「本版本跑在专用服务器上」这件事在托管侧永远为假。** 两条本该能回答这个问题的原生绑定（`:9` 与 `:12`）都存在、都标注完整，却都被同名的硬编码常量属性顶替。**⇒ 专用服务器专属的代码路径在这条链上不可达。**

边界：**`internal interface`，编译期不可引用。** 44 个绑定只能经 `MBAPI.IMBNetwork` 间接到达。**而消费它的 [GameNetwork](../../mission-ext/GameNetwork/) 是 `public static class`（`GameNetwork.cs:16`），没有实例也没有工厂方法** —— 所以那两条硬编码常量是**全局单值**，对整个进程都恒为 `false`。

## 本族：硬编码常量顶替原生绑定（共 4 处，本页覆盖其中 2 处）

**全树扫描确认这一族共 4 处**，判据是机械的、不需要判断意图：

> 在**同一个 wrapper 类里**，若既有「方法体是 `return MBAPI.IMBxxx.Yyy(...);`」的成员、又有「方法体是 `return false;` 或属性 `=> false`」的成员，**那么后者就是「真值只在 native 侧」的那几个**。

| # | 硬编码的托管成员 | 被顶替的原生绑定 | 托管调用点 | 本页 |
|---|---|---|---|---|
| 1 | `GameNetwork.cs:353` `public static bool IsDedicatedServer => false;` | `IMBNetwork.cs:11` `[EngineMethod("is_dedicated_server")]` | 7 处 | **本页** |
| 2 | `GameNetwork.cs:355` `public static bool MultiplayerDisabled => false;` | `IMBNetwork.cs:8` `[EngineMethod("get_multiplayer_disabled")]` | 1 处（`Module.cs:490`） | **本页** |
| 3 | `MBTestRun.cs:30` `public static bool SaveScene() { return false; }` | `IMBTestRun.cs:23` `[EngineMethod("save_scene")]` | 0 | 见 [IMBTestRun](../IMBTestRun/) |
| 4 | `MBTestRun.cs:35` `public static bool OpenDefaultScene() { return false; }` | `IMBTestRun.cs:26` `[EngineMethod("open_default_scene")]` | 0 | 见 [IMBTestRun](../IMBTestRun/) |

**⇒ 本页的 6 个无调用点绑定里，有 2 个（`:9` `get_multiplayer_disabled`、`:12` `is_dedicated_server`）属于这一族；另 4 个（`:27`/`:48`/`:84`/`:102`）不属于 —— 它们是「零包装」而不是「被顶替」。** 扫描规模与误报形态见 [IMBTestRun](../IMBTestRun/) 的同名小节。

## 如何使用

**怎么拿到它**：经 `MBAPI.IMBNetwork`（`MBAPI.cs` 内的 `internal static` 字段）+ `GetObject<IMBMission>` 同一套字典查找（`MBAPI.cs:70-77`）。**编译期 mod 拿不到这两个符号。**

复现「两个绑定被硬编码常量顶替」这个判断（这是本页全部结论的来源）：

```csharp
using TaleWorlds.MountAndBlade;

// IMBNetwork.cs:9   bool GetMultiplayerDisabled();   ← 无管理调用点
// IMBNetwork.cs:12  bool IsDedicatedServer();          ← 无管理调用点（且无指针形参）
// GameNetwork.cs:353  public static bool IsDedicatedServer => false;    ← 硬编码，且被 6 处消费
// GameNetwork.cs:355  public static bool MultiplayerDisabled => false;  ← 硬编码，被 Module.cs:490 消费
//
// 消费点全清单：
//   IsDedicatedServer    GameNetwork.cs:628（选 MultiServer/MultiClientServer）、:737
//                        ChatBox.cs:265、:280、:460；DestructableComponent.cs:447
//   MultiplayerDisabled  Module.cs:490

// GameNetwork 是 public static class（GameNetwork.cs:16）—— 没有实例，也没有工厂方法
// 所以这两个属性只能【静态】读：
Debug.Print("GameNetwork.IsDedicatedServer = " + GameNetwork.IsDedicatedServer, 0);   // 恒 false
Debug.Print("GameNetwork.MultiplayerDisabled = " + GameNetwork.MultiplayerDisabled, 0); // 恒 false
// 两个原生绑定都没被问；两个消费点群共 7 处引用这两个常量
```

对照「哪些绑定**确实**被调用」——调用点跨 3 个文件：

```csharp
// 38 个有托管调用点的绑定，分布：
//   GameNetwork.cs          29 次
//   GameNetworkMessage.cs   19 次
//   MissionLobbyComponent.cs  1 次
// 6 个无调用点的绑定：
//   get_multiplayer_disabled(:9) / is_dedicated_server(:12) / server_ping(:27)
//   remove_bot_on_server(:48) / read_string_from_packet(:84) / write_string_to_packet(:102)
// 注意后两个是「字符串包读写」这一对 —— 一个未被调用、另一个也未被调用
Debug.Print("6 个无调用点：2 个被硬编码顶替、2 个是配对的字符串包读写、2 个是服务器操作", 0);
```

**用它最容易踩的一条**：**「专用服务器」这个概念在托管侧恒为否。** 如果你的 mod 写了 `if (GameNetwork.IsDedicatedServer) { /* 服务器专属逻辑 */ }`，**那段代码永远不执行**，而且没有任何编译或运行期告警 —— `GameNetwork.cs:353` 是一个合法的常量属性。**而 `IMBNetwork.cs:12` 的原生绑定就在同一个程序集里、随时可问，只是没人问。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `[ScriptingInterfaceBase]` | `IMBNetwork.cs:5` | 标记为可脚本化，见 [ScriptingInterfaceBase](../ScriptingInterfaceBase/)（28 个 IMB* 接口之一）。 |
| 44 个 `[EngineMethod]` 绑定 | `[EngineMethod("native_name", false, null, false)]` + 签名 | `get_` 4 / `set_` 3 / 动词 37。**38 个有托管调用点，6 个没有。** **37 个动词里绝大多数不带任何指针首参** —— 本接口的操作对象是网络会话本身，不是某个 mission/agent。 |
| `IsDedicatedServer` | `[EngineMethod("is_dedicated_server", …)] bool IsDedicatedServer()`（`:12`） | **被托管常量顶替。** 注意**它不带任何形参**（与 `IMBAgent` 那种 `UIntPtr` 首参形态不同）。`GameNetwork.cs:353` 是 `=> false`。**该属性有 6 个消费点**（`GameNetwork.cs:628`/`:737`、`ChatBox.cs:265`/`:280`/`:460`、`DestructableComponent.cs:447`）。**⇒ 这个绑定存在、标注完整、却从未被调用。** |
| `GetMultiplayerDisabled` | `[EngineMethod("get_multiplayer_disabled", …)] bool GetMultiplayerDisabled()`（`:9`） | **被托管常量顶替，且无指针形参。** `GameNetwork.cs:355` 是 `=> false`，消费点是 `Module.cs:490` 的 `if (!GameNetwork.MultiplayerDisabled)`。 |
| `ServerPing` | `[EngineMethod("server_ping", …)] void ServerPing(string serverAddress, int port)`（`:27`） | **无托管调用点。** 形参是 `string + int`，**不涉及任何原生指针** —— 它是一个纯网络操作。我**不断言**它是死代码还是被 native 侧回调使用。 |
| `RemoveBotOnServer` | `[EngineMethod("remove_bot_on_server", …)] void RemoveBotOnServer(int botPlayerIndex)`（`:48`） | **无托管调用点。** 注意它与 `:45` 的 `add_new_bot_on_server` 是一对（add 有调用、remove 没有），**但我没有核对 `add` 的调用点上下文**，故不断言这是遗漏还是有意。 |
| `ReadStringFromPacket` / `WriteStringToPacket` | `[EngineMethod("read_string_from_packet", …)] string ReadStringFromPacket(ref bool bufferReadValid)`（`:84`）/ `void WriteStringToPacket(string value)`（`:102`） | **两个都无托管调用点。** 而同一族的其他包读写（`read_int_from_packet` `:69`、`write_int_to_packet` `:87`、`read_byte_array_from_packet` `:105`…）**都在调用之列**。**⇒ 整数/浮点/字节数组的包读写托管侧在用，唯独字符串这一对没有。** 我**不断言**这是序列化协议里字符串走了别的路径，还是这层封装未被启用。 |

## 真实示例

六个无调用点的两种成因（这是本页的核心结论）：

```csharp
// 成因 A：被托管常量顶替（2 个）—— 绑定在，但托管侧另有一个硬编码答案
//   is_dedicated_server      (:12)  -> GameNetwork.cs:353  => false   被 6 处消费
//   get_multiplayer_disabled (:9)   -> GameNetwork.cs:355  => false   被 Module.cs:490 消费
//
// 成因 B：确实无托管包装（4 个）
//   server_ping            (:27)  void ServerPing(string serverAddress, int port)
//   remove_bot_on_server   (:48)  void RemoveBotOnServer(int botPlayerIndex)
//   read_string_from_packet (:84)  string ReadStringFromPacket(ref bool bufferReadValid)
//   write_string_to_packet  (:102) void WriteStringToPacket(string value)
// 其中 :84 与 :102 是【一对】—— 同族的其他包读写（:69/:87/:105/:108 等）都有调用点
Debug.Print("2 个被顶替 + 4 个无包装；字符串包读写成对缺失", 0);
```

对照组：`is_dedicated_server` 与同接口的 `is_enemy`（`IMBTeam.cs:9`）形态差异 —— 后者有 `set_` 配对且**被调用**：

```csharp
// IMBTeam.cs:9   [EngineMethod("is_enemy", false, null, true)]
//                bool IsEnemy(UIntPtr missionPointer, int teamIndex, int otherTeamIndex);
// 注意第四参数是 true，而 IMBNetwork 的 44 个绑定第四参数全是 false
// 且 IMBTeam.IsEnemy 有托管调用点（MBTeam.cs × 2）
Debug.Print("第四参数 true 的绑定与 false 的绑定，托管侧使用情况不同", 0);
```

## 风险与边界

- **`internal interface`，编译期不可引用。** 实现全在 `Bannerlord.Native.dll`，**不在源码树**。**所以本页没有一条断言来自原生实现。**
- **两个关键状态被硬编码为 `false`。** `GameNetwork.cs:353`/`:355`。**⇒ 专用服务器专属路径不可达，且无告警。** 这是本页最需要 modder 记住的一条。
- **`IsDedicatedServer` 与 `MultiplayerDisabled` 都是「属性而非方法」。** `:353`/`:355` 的形态是 `=> false`，**不是** `=> MBAPI.IMBNetwork.IsDedicatedServer(...)`。**所以它们连调用开销都没有，编译期可被常量折叠。**
- **44 个绑定里 37 个动词不带指针首参。** 与 [IMBAgent](../IMBAgent/)（241/245 含 `UIntPtr`）形态相反 —— **本接口操作的是网络会话，不是 mission 对象。**
- **字符串包读写成对缺失。** `:84` 与 `:102`。**我不断言原因**，只陈述同族其他类型都有调用点这个对照事实。
- **`add_new_bot_on_server`（`:45`）有调用而 `remove_bot_on_server`（`:48`）没有。** 我**没有核对 add 的调用上下文**，故不断言这是遗漏。
- **`ServerPing`（`:27`）形参是 `string + int`。** **我没有核对它是否被 native 侧回调**，故不断言它已死。
- **调用点跨 3 个文件。** `GameNetwork.cs` 29 / `GameNetworkMessage.cs` 19 / `MissionLobbyComponent.cs` 1。**只看 `GameNetwork.cs` 会漏 20 个。**

## 参见

- 标记它可脚本化的特性：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)
- 托管侧唯一消费方：[GameNetwork](../../mission-ext/GameNetwork/)（`:353`/`:355` 的两个硬编码常量、`:628`/`:737` 的消费）、`GameNetworkMessage`（19 次）、`MissionLobbyComponent`（1 次）
- 两个硬编码常量的消费点：`ChatBox.cs:265`/`:280`/`:460`、`DestructableComponent.cs:447`、`Module.cs:490`
- 兄弟接口：[IMBAgent](../IMBAgent/)（245 绑定、调用点 91/93 集中在一处）、[IMBMission](../IMBMission/)（116 绑定、调用点跨 3 文件）
- 形态对照：`IMBTeam.cs:9` 的 `is_enemy`（第四参数 `true`，有调用点）vs 本接口 44 个绑定第四参数全 `false`
- 桶首页：[mission API 分区](../)