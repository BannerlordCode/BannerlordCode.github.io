---
title: "IMBTestRun"
description: "编辑器场景测试接口的 10 个绑定：其中 save_scene 与 open_default_scene 在托管侧从未被调用——因为 MBTestRun 把这两个方法硬编码成了 return false。"
---

# IMBTestRun

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal interface IMBTestRun`（`[ScriptingInterfaceBase]`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBTestRun.cs`

## 概述

`IMBTestRun` 是 37 行、**10 个 `[EngineMethod]` 绑定**的纯声明接口——**零方法体**，实现落在 `Bannerlord.Native.dll`（**不在源码树**）。形态是 `get_` 1 个 / `set_` 0 个 / 动词名 9 个，`[ScriptingInterfaceBase]` 标记在 `:5`。

**它的托管侧包装类 `MBTestRun` 只有 49 行，而且把这件事摆在明面上**：9 个包装方法里 **7 个是 `return MBAPI.IMBTestRun.X(...);`**，另外 **2 个是 `return false;`** —— 而这两个硬编码的方法名，恰好就是本接口里唯一两个**零托管调用点**的绑定。

## 心智模型

把它当成**「编辑器场景控制台」**。三条推论：

第一,**`save_scene`（`:23-24`）与 `open_default_scene`（`:26-27`）在托管侧从未被调用，因为 `MBTestRun` 把同名方法写成了硬编码常量。** `MBTestRun.cs:30-33` 是 `public static bool SaveScene() { return false; }`，`:35-38` 是 `OpenDefaultScene()` 同样 `return false;`。而同一个文件里其余 7 个方法（`:5`/`:10`/`:15`/`:20`/`:25`/`:40`/`:45`）**全都是 `return MBAPI.IMBTestRun.XXX(...);` 的直接转发**，形态一眼可辨。

第二,**所以「保存场景」与「打开默认场景」这两件事在托管侧恒为失败。** 不是「抛异常」也不是「静默无效」——是**返回一个常量 `false`**，而调用方看到的就是「保存失败」这个结论。**⇒ 编辑器工具里「保存场景」按钮永远失败，且没有任何告警。**

第三,**`auto_continue`（`:8-9`）是第三个零调用点的绑定，且它连包装方法都没有。** 它与前两个不同：**`MBTestRun` 里压根没有对应方法**（不是硬编码顶替，是压根没暴露）。

## 本族：硬编码常量顶替原生绑定（共 4 处，本页覆盖其中 2 处）

**全树扫描确认这一族共 4 处**，判据是机械的、不需要判断意图：

> 在**同一个 wrapper 类里**，若既有「方法体是 `return MBAPI.IMBxxx.Yyy(...);`」的成员、又有「方法体是 `return false;` 或属性 `=> false`」的成员，**那么后者就是「真值只在 native 侧」的那几个** —— 因为前者证明这个类本来就会转发。

四个实例（全部实测）：

| # | 硬编码的托管成员 | 被顶替的原生绑定 | 托管调用点 | 本页 |
|---|---|---|---|---|
| 1 | `GameNetwork.cs:353` `public static bool IsDedicatedServer => false;` | `IMBNetwork.cs:11` `[EngineMethod("is_dedicated_server")]` | 7 处（`GameNetwork.cs:628`/`:737`、`ChatBox.cs:265`/`:280`/`:460`、`DestructableComponent.cs:447`） | 见 [IMBNetwork](../IMBNetwork/) |
| 2 | `GameNetwork.cs:355` `public static bool MultiplayerDisabled => false;` | `IMBNetwork.cs:8` `[EngineMethod("get_multiplayer_disabled")]` | 1 处（`Module.cs:490`） | 见 [IMBNetwork](../IMBNetwork/) |
| 3 | `MBTestRun.cs:30` `public static bool SaveScene() { return false; }` | `IMBTestRun.cs:23` `[EngineMethod("save_scene")]` | 0 | **本页** |
| 4 | `MBTestRun.cs:35` `public static bool OpenDefaultScene() { return false; }` | `IMBTestRun.cs:26` `[EngineMethod("open_default_scene")]` | 0 | **本页** |

**四种危险都在这一族里出现过**，逐条可对上：
- **① mod 写 `if (...)` 分支永不执行** —— 实例 1、2、3、4 全部适用。
- **② 常量可被 JIT 折叠，比运行时返回 `false` 更难查** —— 实例 1/2 是属性（`=> false`，无方法体）；实例 3/4 是方法（`return false`，每次进方法体）。**两者对 JIT 的意义不同，我不断言性能差异是否可测。**
- **③ 原生绑定就在同一程序集、标注完整，只是没人问** —— 四处全部满足。
- **④ 现象上无法区分「功能坏了」与「功能没接」** —— 见「最容易踩的一条」。

**扫描规模与误报**：`grep '=> false;\|=> true;'` 全树 439 处 + 「方法体只有 `return false/true`」的一批；再用「是否存在同名 `[EngineMethod]` 绑定」过滤，得 23 个候选，**手工逐条判读后确认 4 个是真成员**。误报的两种典型：`EmptyInputManager.IsKeyDown` 子串误匹配到 `IMBInputDomain.is_key_down`；`MBArrayList.IsSynchronized => false` 匹配到的是 `IMBPeer` 的 **`set_`** 绑定（get/set 词族误匹配）。**⇒ 机械判据会把候选压到 23，但最后 4 个仍需人工判读。**

## 如何使用

**怎么拿到它**：**编译期拿不到。** `IMBTestRun` 与 `MBAPI.IMBTestRun` 都是 `internal`。能触达的只有 [MBTestRun](../../mission-ext/MBTestRun/) 那 9 个 public static 包装方法。

复现「7 个转发 + 2 个硬编码」这个分布（这是本页全部结论的来源）：

```csharp
using System;
using System.Linq;
using System.Reflection;
using TaleWorlds.MountAndBlade;

// MBTestRun.cs 全文 49 行，9 个 public static 方法：
//   转发原生（7 个）：:5 EnterEditMode  :10 NewScene  :15 LeaveEditMode  :20 OpenScene
//                    :25 CloseScene     :40 GetFPS     :45 StartMission
//   硬编码 false（2 个）：:30 SaveScene  :35 OpenDefaultScene
// 而 IMBTestRun.cs:23 save_scene 与 :26 open_default_scene 这两个绑定
// 全树零托管调用点 —— 与被硬编码的两个方法一一对应
MethodInfo[] all = typeof(MBTestRun).GetMethods(BindingFlags.Public | BindingFlags.Static);
Debug.Print("MBTestRun 公开静态方法数 = " + all.Length + "（7 个转发 + 2 个恒 false）", 0);

// 调它们返回的是硬编码常量，不是一次原生调用的结果：
Debug.Print("SaveScene() = " + MBTestRun.SaveScene() + "  OpenDefaultScene() = " + MBTestRun.OpenDefaultScene(), 0);
```

**用它最容易踩的一条**：**`MBTestRun.SaveScene()` 恒返回 `false`，而这是常量不是行为。** 所以：**写 `if (!MBTestRun.SaveScene()) { /* 报错提示 */ }` 会稳定走进报错分支**，而你在托管侧找不到任何原因 —— 原生绑定 `IMBTestRun.cs:23` 的 `save_scene` 就在同一个程序集里、标注完整，只是**从来没人调它**。**⇒ 「保存场景功能坏了」与「这个功能在托管侧根本没接」在现象上无法区分。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `[ScriptingInterfaceBase]` | `IMBTestRun.cs:5` | 标记为可脚本化，见 [ScriptingInterfaceBase](../ScriptingInterfaceBase/)（28 个 IMB* 接口之一）。 |
| 10 个 `[EngineMethod]` 绑定 | `[EngineMethod("native_name", false, null, false)]` + 签名 | `get_` 1 / 动词 9。**7 个有托管调用点，3 个没有。** **10 个里只有 `OpenScene`（`:18`）带形参（`string sceneName`），其余全是无参的全局场景操作。** |
| `SaveScene` | `[EngineMethod("save_scene", …)] bool SaveScene()`（`:23-24`） | **被托管常量顶替。** `MBTestRun.cs:30-33` 是 `public static bool SaveScene() { return false; }` —— **注意它与旁边 7 个转发方法形态完全不同**：没有 `MBAPI.IMBTestRun.SaveScene()` 那一行。 |
| `OpenDefaultScene` | `[EngineMethod("open_default_scene", …)] bool OpenDefaultScene()`（`:26-27`） | **被托管常量顶替。** `MBTestRun.cs:35-38` 同样 `return false;`。**与 `SaveScene` 成对，两个都是「打开/保存场景」这一组操作。** |
| `AutoContinue` | `[EngineMethod("auto_continue", …)] int AutoContinue(int type)`（`:8-9`） | **零调用点，且托管侧零包装。** 与前两个不同：`MBTestRun` 里**没有**对应方法。**返回类型 `int`、带 `int type` 形参**，是本接口里唯一一个带非 bool 返回的绑定。**我不断言它是死代码还是被 native 侧回调。** |
| 其余 7 个有调用点的绑定 | `EnterEditMode`（`:15`）、`NewScene`（`:33`）、`LeaveEditMode`（`:30`）、`OpenScene`（`:18`）、`CloseScene`（`:21`）、`GetFPS`（`:12`）、`StartMission`（`:36`） | **全部被 `MBTestRun` 一对一转发**（`MBTestRun.cs:5`/`:10`/`:15`/`:20`/`:25`/`:40`/`:45`），每个方法体都是单行 `return MBAPI.IMBTestRun.XXX(...)` 或单行调用。**⇒ 这 7 个是本接口的「正常通路」，与那 2 个硬编码形成直接对照。** |

## 真实示例

同一个文件里的两种写法（这是本页最直观的一张对照）：

```csharp
// 转发形态（7 个）—— MBTestRun.cs:5-8
//   public static bool EnterEditMode()
//   {
//       return MBAPI.IMBTestRun.EnterEditMode();   ← 每次真调原生
//   }
// 硬编码形态（2 个）—— MBTestRun.cs:30-33
//   public static bool SaveScene()
//   {
//       return false;                               ← 常量，永不调原生
//   }
// 而原生那边两个绑定都在：IMBTestRun.cs:23 save_scene、:26 open_default_scene
Debug.Print("同一文件 9 个包装方法里，2 个没有 MBAPI 调用行", 0);
```

零调用点的三个绑定按成因分两类（这是本页的核心结论）：

```csharp
// 成因 A：被硬编码常量顶替（2 个）—— 托管侧【有】同名方法，但内容是常量
//   IMBTestRun.cs:23  save_scene            -> MBTestRun.cs:30  return false;
//   IMBTestRun.cs:26  open_default_scene    -> MBTestRun.cs:35  return false;
//
// 成因 B：托管侧零包装（1 个）—— 连同名方法都没有
//   IMBTestRun.cs:8   auto_continue  int AutoContinue(int type)
//
// 有调用点的 7 个：EnterEditMode(:15) NewScene(:33) LeaveEditMode(:30)
//                 OpenScene(:18) CloseScene(:21) GetFPS(:12) StartMission(:36)
Debug.Print("2 个被顶替 + 1 个零包装 + 7 个正常转发 = 10", 0);
```

## 风险与边界

- **`internal interface`，编译期不可引用。** 实现全在 `Bannerlord.Native.dll`，**不在源码树**。**所以本页没有一条断言来自原生实现 —— 包括「`save_scene` 在原生侧到底能不能保存场景」，这一条【未核查】。**
- **`SaveScene()` / `OpenDefaultScene()` 恒返回 `false`。** `MBTestRun.cs:30-33` / `:35-38`。**⇒ 编辑器场景的保存与「打开默认场景」在托管侧不可用，且现象是「返回 false」而非异常。**
- **原生侧到底能不能保存场景：【未核查】。** `save_scene`（`IMBTestRun.cs:23`）的实现落在 `Bannerlord.Native.dll`，**不在源码树**。**所以本页只说「托管侧恒返回 false」，绝不说「原生侧的保存功能坏了」** —— 后者我没有证据。
- **这两个 `false` 是常量，可被常量折叠。** 与 [IMBNetwork](../IMBNetwork/) 的 `GameNetwork.cs:353`/`:355` 同形态。**⇒ 若调用方写 `if (MBTestRun.SaveScene()) …else …`，else 分支会被无条件选中。**
- **与 `GameNetwork` 那两处不同：这里是方法不是属性。** `MBTestRun.cs:30`/`:35` 是 `public static bool XxxScene()`，而 `GameNetwork.cs:353`/`:355` 是 `=> false` 的属性。**所以 `SaveScene()` 每次调用都进方法体（虽然立刻返回），而 `IsDedicatedServer` 连方法体都没有。** 两者对 JIT 的意义不同，我**不断言性能差异是否可测**。
- **`auto_continue`（`:8`）零包装。** `MBTestRun` 里没有对应方法。**我不断言它是否被 native 侧调用。**
- **10 个绑定只有 `OpenScene`（`:18`）带形参。** `AutoContinue`（`:9`）带 `int type`。**其余 8 个是无参的全局场景操作。**
- **`GetFPS`（`:11-12`）是唯一的 `get_`。** 它有托管调用点（`MBTestRun.cs:42`），**与 `save_scene` 那两个形成「有 `get_` 前缀 ≠ 被调用」的又一例** —— 见 [IMBWorld](../IMBWorld/) 的同类结论。

## 参见

- 托管侧包装类：[MBTestRun](../../mission-ext/MBTestRun/)（49 行 9 个方法；`:5`-`:45` 七个转发、`:30`/`:35` 两个硬编码）
- 标记它可脚本化的特性：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)
- 同模式的另两处：[GameNetwork](../../mission-ext/GameNetwork/)（`:353` `IsDedicatedServer => false`、`:355` `MultiplayerDisabled => false`，顶替 `IMBNetwork.cs:11`/`:8`）—— 已写在本桶的 [IMBNetwork](../IMBNetwork/) 页
- 形态对照：[IMBAgent](../IMBAgent/)（镜像顶替型，getter 读缓存）、[IMBWorld](../IMBWorld/)（镜像顶替型）、[IMBMission](../IMBMission/)（零包装型）
- 桶首页：[mission API 分区](../)