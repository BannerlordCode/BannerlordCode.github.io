---
title: "模块系统"
description: "Bannerlord 的 Module 是什么：一个含 SubModule.xml 与程序集的文件夹；游戏按依赖顺序加载模块，mod 通过派生 MBSubModuleBase 接入生命周期，并说明每个加载阶段能安全地做什么。"
---

# 模块系统

> 模块系统回答 mod 的第一个工程问题：**我的代码什么时候被执行？** 答案是：游戏按 `SubModule.xml` 装载模块，再在正确的阶段回调你派生的 `MBSubModuleBase`。

## 一句话定位

一个 Bannerlord「模块（Module）」就是一个**带 `SubModule.xml` 和若干 `.dll` 的文件夹**；游戏按依赖顺序把它们加载进来，每个模块通过唯一的 `MBSubModuleBase` 派生类钩入生命周期——你的 mod 不是一堆散落的 DLL，而是被这套装载流程编排好时序的一段代码。

## 心智模型

把「模块」想成游戏启动时的一个**插槽**，它有三条铁律：

1. **模块 = 文件夹 + 声明 + 程序集**。文件夹里有 `SubModule.xml`（身份证）和 `bin/<平台>/MyMod.dll`（代码）。没有 `SubModule.xml`，游戏就不认识这个 mod。
2. **加载有顺序，依赖决定先后**。游戏先解析所有 `SubModule.xml` 的依赖关系（`DependedModules`），按拓扑排序逐个加载：被依赖的模块先加载。你不能假设自己的 `OnSubModuleLoad` 先于某个依赖模块运行，也不能假设晚于它。
3. **`TaleWorlds.*` 程序集 = 文档命名空间**。游戏自身的代码按职责拆成 `TaleWorlds.Core`、`TaleWorlds.CampaignSystem`、`TaleWorlds.MissionSystem` 等程序集；本文档用 `core/`、`campaign/`、`mission/` 这样的命名空间路径对应它们。你写的 mod 通常只引用其中几层，但引用关系必须和分层方向一致（上层引用下层，见 [SDK 分层概览](../sdk-overview/)）。

生命周期的关键分界线是：**模块装载阶段**（`Game.Current` / `Campaign.Current` 还可能是 `null`）与**游戏阶段**（`OnGameStart` 之后，运行期对象才可用）。把「创建世界对象」或「读战役状态」提前到装载阶段，是绝大多数启动崩溃的根因。

## 真实最小示例

### SubModule.xml（最小可加载骨架）

下面是 1.3.15 真实可用的精简骨架。`<Module Name="MyMod">` 是根；`<SubModules>` 里放一个或多个 `<SubModule>`；`<DLLs>` 声明要加载的程序集；`<XmlNode Name="Define" .../>` 用来登记自定义 XML 资源（兵种、物品等）。

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module Name="MyMod">
  <Id value="MyMod" />
  <Version value="1.0.0" />
  <SingleplayerModule value="true" />
  <DependedModules>
    <DependedModule Id="Native" />
    <DependedModule Id="SandBoxCore" />
  </DependedModules>
  <SubModules>
    <SubModule>
      <Name value="MyMod" />
      <DLLName value="MyMod.dll" />
      <SubModuleClassType value="MyMod.MySubModule" />
      <DLLs>
        <DLL value="MyMod.dll" />
      </DLLs>
    </SubModule>
  </SubModules>
  <XmlNode Name="Define">
    <!-- 例如：<Items> 或 <Heroes> 等自定义 XML 的加载入口 -->
  </XmlNode>
</Module>
```

`SubModuleClassType` 的值必须是派生 `MBSubModuleBase` 的**完整类名**（含命名空间），大小写必须完全一致，否则游戏找不到入口类。

### 最小的 MBSubModuleBase 派生类

下面四个方法名都是真实存在的生命周期钩子。关键是：**每个方法对应一个阶段，只有在那个阶段能安全做的事才写进去**。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod;

public sealed class MySubModule : MBSubModuleBase
{
    // 阶段 1 · 模块装载：此时还没有 Game，也没有 Campaign
    // 安全做法：注册静态类型、读配置、挂载 Harmony patch、订阅一次性全局事件
    public override void OnSubModuleLoad()
    {
    }

    // 阶段 2 · 初始化：仍早于「这一局游戏」被创建
    // 安全做法：一次性全局资源、日志、不依赖运行期对象的准备
    public override void Initialize()
    {
    }

    // 阶段 3 · 一局游戏开始（新档与读档都会经过这里）
    // 真实签名为 OnGameStart(Game game, IGameStarter starter)
    // 安全做法：把 CampaignBehavior / MissionBehavior 注册进启动器
    public override void OnGameStart(Game game, IGameStarter starter)
    {
    }

    // 阶段 4 · 加载流程回调：返回 true 表示本模块继续参与加载
    // 安全做法：轻量加载期准备；不要用它替代在 OnGameStart 里正常注册行为
    public override bool DoLoading(Game game)
    {
        return true;
    }
}
```

**每个阶段能安全做什么 / 不能假设什么**

| 方法 | 运行阶段 | 可以安全做 | 不能假设 |
|---|---|---|---|
| `OnSubModuleLoad()` | 模块装载（主菜单之前） | 注册类型、读配置、挂载 Harmony、订阅模块化事件 | `Game.Current`、`Campaign.Current` 已存在 |
| `Initialize()` | 初始化（仍早于具体一局游戏） | 一次性全局资源、日志 | 任何战役/战斗对象已就绪 |
| `OnGameStart(Game game, IGameStarter starter)` | 一局游戏启动 | 把 `CampaignBehaviorBase` 加入 `CampaignGameStarter`；把 `MissionBehavior` 在 Mission 钩子里加入 | 读档数据已经加载完成（新档与旧档流程不同） |
| `DoLoading(Game game)` | 加载流程 | 轻量加载期准备，返回 `true` 继续 | 用它可以替代 `AddBehavior` 正常注册行为 |

> 真正的规则入口是：`SubModule.xml` → `MBSubModuleBase.OnGameStart` → `CampaignGameStarter.AddBehavior` → `CampaignEvents`。不要在构造函数里找 `Campaign.Current`，也不要在 `OnSubModuleLoad` 里 `new` 世界对象。

## 依赖图

模块系统的两个核心文档页：

- [MBSubModuleBase](../../api/core/MBSubModuleBase/) — 生命周期钩子的完整清单、每个阶段适用场景与崩溃边界。
- [Game](../../api/core-extra/Game/) — `OnGameStart` 收到的 `Game` 是这一局会话的运行期根容器；理解它才能知道在 `OnGameStart` 之后能读到哪些服务（对象注册表、模型、事件总线）。

## 风险段

1. **阶段错位：在装载期访问未初始化的服务**。在 `OnSubModuleLoad` / `Initialize` 里读 `Game.Current`、`Campaign.Current` 或 `Game.ObjectManager`，会在主菜单阶段得到 `null` 并抛 `NullReferenceException`。需要运行期对象时，等 `OnGameStart` 及之后的阶段。
2. **在装载期 `new Game` 或手动创建世界对象**。游戏通过 `MBGameManager` 的工厂创建 `Game` 与 `Campaign`；你手动 `new` 出来的对象不在对象注册表里，不会被存档识别，也会和游戏内部时序冲突。
3. **缺少 `SubModule.xml` 或文件名/路径不对**。游戏只扫描 `Modules/<模块名>/SubModule.xml`。文件缺失、放错目录，模块根本不会出现在启动器里。
4. **`SubModuleClassType` 与程序集名称不匹配**。`SubModuleClassType` 的大小写、命名空间必须与 DLL 中真实的类名完全一致；`DLLName` / `<DLL>` 声明的文件名必须与 `bin/` 下生成的文件名一致。任何一处拼错，模块加载时直接失败。
5. **误以为依赖顺序可控**。你只能声明 `DependedModules`（被依赖方先加载），不能假设自己与「非依赖模块」之间的先后。需要其他模块先就绪的逻辑，应放在 `OnGameStart` 等运行期阶段用判空处理，而不是赌加载顺序。
6. **行为只 `new` 不注册**。在 `OnGameStart` 里只 `new MyBehavior()` 却没调用 `CampaignGameStarter.AddBehavior`，行为不会收到事件与 `SyncData`，看起来加载成功却永远不运行。

## 导航

- [↑ 架构总览](../)
- [↔ 开发者路线图](../developer-roadmap) · [↔ SDK 分层概览](../sdk-overview) · [↔ 崩溃与存档边界](../crash-boundaries)
- 相关类页：[MBSubModuleBase](../../api/core/MBSubModuleBase/) · [Game](../../api/core-extra/Game/)
