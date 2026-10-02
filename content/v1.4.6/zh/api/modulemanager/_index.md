---
title: "modulemanager 桶 — 模块装载器 TaleWorlds.ModuleManager（尚未手写）"
description: "modulemanager 桶只对应 TaleWorlds.ModuleManager，实测 8 个顶层类型、9 个 .cs 文件。本页给出结论：这是启动器/平台侧的模块装载基础设施，mod 作者几乎不需要直接调用它，唯一实用的调用是 ModuleHelper.GetModuleFullPath。"
---
# modulemanager：模块装载器（TaleWorlds.ModuleManager）

> **本桶当前没有任何已撰写页面。** 先给结论，因为它比清单更重要：**这是平台基础设施桶，通常不需要 mod 直接调用。** 下面的清单是给你判断「我到底要不要翻这里」用的，不是待补的 API 索引。

## 这个桶对应源码里的什么

`bannerlord-1.4.6/TaleWorlds.ModuleManager/`：**8 个顶层类型、9 个 `.cs` 文件**（实测，多出来的一个是 `Properties/AssemblyInfo.cs`）。这个命名空间整个存在的目的，是让**启动器**在游戏进程起来之前就把「装了哪些模块、每个模块是什么、依赖谁、文件在哪」这件事算清楚。

`tools/_dir-map-canonical.json` 给它一条直落规则 `TaleWorlds.ModuleManager` → `modulemanager`，没有任何更长前缀来抢它，所以本桶内容就是这一个命名空间。

它和 [core](../core) 桶的关系要分清——这是最常见的混淆：

| | `modulemanager` 桶 | [core](../core) 桶 |
| --- | --- | --- |
| 关键类型 | `ModuleInfo`、`SubModuleInfo`、`ModuleHelper` | `MBSubModuleBase`、`Module` |
| 谁在用 | 启动器 / 平台层，**在你写代码之前就跑完了** | **你的 mod 代码**，`Module.OnGameStart` 的那个 `Module` |
| 你的入口 | 没有 | 继承 `MBSubModuleBase` 并实现 `Module` |

## mod 什么时候会碰到它

诚实的结论：**你几乎不「调用」它，你只是「受它约束」。**

你的 mod 在 `SubModule.xml` 里声明的 `Id` / `DependentVersion` / `SubModuleTags`，会被这一层读成 `SubModuleInfo` 和 `ModuleInfo`，据此决定加载顺序和依赖校验。装载完成后 `ModuleInfo.IsActive` 之类才有意义。所以它是**声明式地参与**，不是**命令式地调用**。

真正值得调用的地方，1.4.6 源码里基本只有一个模式：**定位你自己模块目录下的资源文件**。`ModuleHelper.GetModuleFullPath(string moduleId)` 返回该模块的文件夹路径，你拼上相对路径去读 `Module.xml`、自定义 XML、贴图或 prefab。这是本桶对 mod 作者最实用的一个入口，其他方法（`InitializeModules`、`OnModuleActivated`、`ClearPlatformModuleExtension`）都是启动器流程内部步骤，mod 不该碰。

**心智模型**：把它当成「模块的注册表与文件系统解析器」。两个问题它能回答——「我有哪些模块、按什么顺序」（注册表）、「我的资源文件在哪」（文件系统）。第三个常见误解需要澄清：它**不**负责游戏内注册行为，那是 [campaign](../campaign) 的 `CampaignGameStarter` 和 [mission](../mission) 的 mission 启动流程干的。

## 一个必须记住的事实：没有 `ModuleManager` 这个类

**`TaleWorlds.ModuleManager` 是一个命名空间，不是一个类。** 权威映射的 `_noModuleManager` 字段记录了一次全树核查：1.4.5（8583 个 `.cs`）、1.4.6（11385）、1.4.7（11387）、1.5.3（11487）四个版本里，`class` / `struct` / `interface` 名为 `ModuleManager` 的声明**零命中**，1.4.5 也没有 `ModuleManager.md` 页。

所以：桶名叫 `modulemanager`，是因为它按命名空间命名；**不要**为 `ModuleManager` 建一个类页，那个页从一开始就不存在。`ModuleHelper` 才是这个命名空间里的静态入口。

## 待写清单（8 个，本桶可以全列）

- `ModuleInfo` — 单个已装载模块的运行时描述。已核实的属性包括 `Id` / `Name`（只读）、`IsSelected`、`IsDefault`、`IsRequiredOfficial`、`IsActive`、`IsOfficial`、`Version` / `RequiredBaseVersion`（`ApplicationVersion`）、`Category`（`ModuleCategory`）、`Type`（`ModuleType`）、`FolderPath`、`HasMultiplayerCategory`。**这是本桶最值得写一页的类型**：想知道「模块为什么按这个顺序加载」「谁是官方必需模块」，答案都在它的属性上
- `SubModuleInfo` — `SubModule.xml` 的内存表示；同一个文件里还定义了 `SubModuleTags`（标签枚举），用来标注模块类别（`Sandbox` / `StoryMode` / `CustomBattle` / `Multiplayer` / `Launcher` 之类）。写 mod 的 `SubModule.xml` 时这两个名字会反复出现
- `DependedModule` — 单条依赖记录（依赖哪个模块、要求哪个版本）
- `ModuleHelper` — 本命名空间的静态工具类，模块系统唯一的正常入口。已核实的公开方法包括 `GetModuleFullPath`、`GetModuleInfo`、`GetModuleInfos`、`GetModules`、`GetAllModules`、`GetActiveModules`、`IsModuleActive`、`GetPath`、`GetXmlPath` / `GetXmlPathForNative` / `GetXmlPathForNativeWBase`、`GetXsltPath` / `GetXsltPathForNative`、`GetMbprojPath`，以及属于启动器流程、不该由 mod 调用的 `InitializeModules` / `InitializeSingleModule` / `OnModuleActivated` / `OnModuleDeactivated` / `InitializePlatformModuleExtension` / `ClearPlatformModuleExtension`
- `ModuleCategory` — 模块类别枚举，1.4.6 源码里确实存在（某些旧文档不列它）
- `ModuleType` — 模块类型枚举（区分主模块与平台扩展模块）
- `IPlatformModuleExtension` — 平台扩展模块的接口，由启动器/平台层实现，不是 mod 的扩展点
- `Extensions` — 只有一个方法的静态辅助类：`GetActiveReferencingGameAssembliesSafe(this Assembly)`，即「只从当前活跃的游戏程序集里找引用者」。它依赖 `ModuleHelper.GetActiveGameAssemblies`，属于装载器的反射工具链

**没有页面**。本桶 8 个类型全列出来了，收益却不匹配——因为没有 mod 会去实现 `IPlatformModuleExtension` 或调 `InitializeModules`。写页面时应当只给 `ModuleInfo` 和 `ModuleHelper` 写完整用法，其余几个一页带过或干脆不写。

## 为什么现在还没有页面

1.4.6 的手写覆盖按 **mod 实际使用频率** 排序。本桶排在后段，理由是**它是唯一「mod 从不主动调用」的桶**：写一个 mod 从头到尾不需要引用 `TaleWorlds.ModuleManager` 的任何类型。你要写模块入口，写的是 [core](../core) 桶的 `MBSubModuleBase` 和 `Module`。

那它为什么还需要一个桶？因为它值得有**一页诚实说明**，让读者在搜索时能立刻得到「这里不用找」的答案，而不是以为文档漏了。这一页就是这个答案。它排在后段不是因为不重要，而是因为它没有可写的调用面。

**这一页不是占位符**——归属、8 个类型全清单、`ModuleManager` 不存在的核查结论，都是从源码来的。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) · [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
