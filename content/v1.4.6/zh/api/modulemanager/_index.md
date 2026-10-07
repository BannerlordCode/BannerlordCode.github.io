---
title: "modulemanager 桶 — 模块装载器 TaleWorlds.ModuleManager（0 张类页）"
description: "modulemanager 桶只对应 TaleWorlds.ModuleManager 一个命名空间。实测 9 个 .cs 文件、8 个命名空间级类型声明，可以全列。本页说明它和 core 桶的分工、ModuleHelper.GetModuleFullPath 这个唯一实用入口，并核实了一件事：1.4.6 里没有名为 ModuleManager 的类型。"
---
# modulemanager：模块装载器（`TaleWorlds.ModuleManager`）

> **覆盖状态：本桶 0 张类页。**
> 结论比清单更重要，所以放在最前面：**这是平台基础设施桶，通常不需要 mod 直接调用。** 本页是导览，页面上出现的类型名全部是纯文本，**没有任何一个指向尚未撰写的类页**。

## 这个桶在源码里对应什么

归属规则只有一条直落前缀 `TaleWorlds.ModuleManager` → `modulemanager`，没有更长的规则来抢它。源码目录 `bannerlord-1.4.6/TaleWorlds.ModuleManager/`。

这个命名空间整个存在的目的，是让**启动器**在游戏进程起来之前就把「装了哪些模块、每个模块是什么、依赖谁、文件在哪」这件事算清楚。

**实测规模**：

| 口径 | 数值 |
| --- | --- |
| `.cs` 文件数（含 `Properties/AssemblyInfo.cs`） | 9 |
| 命名空间级类型声明数 | 8 |
| 声明该命名空间的 `.cs` 文件数 | 8 |
| 子命名空间数 | 0 |

8 个类型就是全部，**不是节选**。

## 它和 core 桶的关系（最常见的混淆）

| | `modulemanager` 桶 | [core](../core) 桶 |
| --- | --- | --- |
| 关键类型 | `ModuleInfo`、`SubModuleInfo`、`ModuleHelper` | `MBSubModuleBase`、`Module` |
| 谁在用 | 启动器 / 平台层，**在你写代码之前就跑完了** | **你的 mod 代码**，模块入口那个 `Module` |
| 你的入口 | 没有 | 继承 `MBSubModuleBase` 并实现 `Module` |

写一个 mod 从头到尾不需要引用 `TaleWorlds.ModuleManager` 的任何类型。你要写的模块入口在 [core](../core)。

## 读源码：可复跑的查法

在工作区根目录执行：

```bash
find bannerlord-1.4.6/TaleWorlds.ModuleManager -name '*.cs' | wc -l

grep -rl '^namespace TaleWorlds.ModuleManager' bannerlord-1.4.6/TaleWorlds.ModuleManager --include='*.cs'

awk '/^\t(public |internal |abstract |sealed |static |partial |unsafe |readonly |new )*(class|struct|interface|enum|record|delegate)[ \t]+[A-Za-z_]/' \
  $(find bannerlord-1.4.6/TaleWorlds.ModuleManager -name '*.cs')

# ModuleHelper 的全部 public static 方法
grep -n 'public static' bannerlord-1.4.6/TaleWorlds.ModuleManager/ModuleHelper.cs

# 核实「没有 ModuleManager 这个类」
grep -rnE '(class|struct|interface|enum|record)[[:space:]]+ModuleManager\b' bannerlord-1.4.6 --include='*.cs'
```

**口径定义**：`.cs 文件数` = `find <目录> -name '*.cs' | wc -l`；`命名空间级类型声明数` = 该目录内缩进恰好一个制表符的类型 / 委托声明行数，**不含嵌套类型**。

## 什么时候会碰到它

**你几乎不「调用」它，你只是「受它约束」。**

你的 mod 在模块声明文件（游戏安装目录里的 `SubModule.xml`——注意它属于 mod 包内容，**反编译的 1.4.6 源码树里没有这个文件**，因为那里只有程序集）里声明的 `Id` / `DependentVersion` / 标签，会被这一层读成 `SubModuleInfo` 和 `ModuleInfo`，据此决定加载顺序和依赖校验。装载完成后 `ModuleInfo.IsActive` 之类才有意义。所以它是**声明式地参与**，不是**命令式地调用**。

真正值得调用的地方，1.4.6 源码里基本只有一个模式：**定位你自己模块目录下的资源文件**。`ModuleHelper.GetModuleFullPath(string moduleId)` 返回该模块的文件夹路径，你拼上相对路径去读模块 XML、自定义 XML、贴图或 prefab。这是本桶对 mod 作者最实用的一个入口。其余方法（`InitializeModules`、`OnModuleActivated`、`ClearPlatformModuleExtension` 等）都是启动器流程内部步骤，mod 不该碰。

**心智模型**：把它当成「模块的注册表与文件系统解析器」。两个问题它能回答——「我有哪些模块、按什么顺序」（注册表）、「我的资源文件在哪」（文件系统）。第三个常见误解需要澄清：它**不**负责游戏内注册行为，那是 [campaign](../campaign) 的战役启动流程和 [mission](../mission) 的 mission 启动流程干的。

## 一个必须记住的事实：没有 `ModuleManager` 这个类型

**`TaleWorlds.ModuleManager` 是一个命名空间，不是一个类。** 在 `bannerlord-1.4.6/` 全树（11385 个 `.cs` 文件）执行

```bash
grep -rnE '(class|struct|interface|enum|record)[[:space:]]+ModuleManager\b' bannerlord-1.4.6 --include='*.cs'
```

**零命中**。所以桶名叫 `modulemanager` 只是因为它按命名空间命名；**不要**为 `ModuleManager` 建类页，那个页从一开始就不存在。`ModuleHelper` 才是这个命名空间里的静态入口。

（`system` 桶有一个同形的坑：1.4.6 里也没有名为 `InputManager` 的类型，见 [system](../system)。）

## 本桶的 8 个类型（全部核实，未撰写类页）

下面每个名字都用 `grep -rw` 在 `bannerlord-1.4.6/TaleWorlds.ModuleManager/` 核实过。**它们全部没有类页**：

- `ModuleInfo` — 单个已装载模块的运行时描述，也是本桶最值得写一页的类型。想知道「模块为什么按这个顺序加载」「谁是官方必需模块」，答案都在它的属性上。
- `SubModuleInfo` — 模块声明文件的内存表示。同文件里还有一个**嵌套**枚举 `SubModuleTags`（不是顶层类型），取值是 `RejectedPlatform` / `ExclusivePlatform` / `DedicatedServerType` / `IsNoRenderModeElement` / `DependantRuntimeLibrary` / `PlayerHostedDedicatedServer` / `EngineType`——用来声明运行环境约束，不是用来标注「沙盒 / 故事模式」这类玩法类别的。写模块声明时这两个名字会反复出现。
- [`DependedModule`](./DependedModule) — 单条依赖记录（依赖哪个模块、要求哪个版本），是个 struct。
- `ModuleHelper` — 本命名空间的静态工具类，模块系统唯一的正常入口。已核实的公开方法包括 `GetModuleFullPath`、`GetModuleInfo`、`GetModuleInfos`、`GetModules`、`GetAllModules`、`GetActiveModules`、`IsModuleActive`、`GetPath`、`GetXmlPath` / `GetXmlPathForNative` / `GetXmlPathForNativeWBase`、`GetXsltPath` / `GetXsltPathForNative`、`GetMbprojPath`，以及属于启动器流程、不该由 mod 调用的 `InitializeModules` / `InitializeSingleModule` / `OnModuleActivated` / `OnModuleDeactivated` / `InitializePlatformModuleExtension` / `ClearPlatformModuleExtension`。
- [`ModuleCategory`](./ModuleCategory) — 模块类别枚举，取值只有四个：`Singleplayer` / `Multiplayer` / `MultiplayerOptional` / `Server`。它是**联机形态**分类，不是玩法分类——想知道「沙盒还是故事模式」得去看模块 Id，不是看这个枚举。
- `ModuleType` — 模块类型枚举（区分主模块与平台扩展模块）。
- [`IPlatformModuleExtension`](./IPlatformModuleExtension) — 平台扩展模块的接口，由启动器 / 平台层实现，不是 mod 的扩展点。
- `Extensions` — 只有一个方法的静态辅助类：`GetActiveReferencingGameAssembliesSafe(this Assembly)`，即「只从当前活跃的游戏程序集里找引用者」。它内部走 `ModuleHelper.GetActiveGameAssemblies`，属于装载器的反射工具链。

## 桶间分工

| 你想做的事 | 该去哪个桶 |
| --- | --- |
| 写 mod 的模块入口类 | [core](../core) 的 `MBSubModuleBase` / `Module` |
| 读自己模块的资源文件路径 | **本桶** 的 `ModuleHelper` |
| 挂战役行为 | [campaign](../campaign) |
| 战斗内单位与行为 | [mission](../mission) |
| 推屏 / 弹屏 / 输入限制 | [gui](../gui) |

[core](../core) 是与本桶分工最紧的另一半，两页互链。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 桶名 ↔ 命名空间的权威对照
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)