---
title: "Core extra — 基础层的长尾：运行时原语、平台桥接、事件与集合"
description: "TaleWorlds.Core / Library / DotNet / LinQuick / Starter 以及分类法兜底桶的所在目录。目前 2 页，均在中文树。"
---
# Core extra — 基础层的长尾

这个桶是 `TaleWorlds.Core`（222 个 `.cs`）、`TaleWorlds.Library`（166）、`TaleWorlds.DotNet`（50）、`TaleWorlds.LinQuick`（3）以及 `TaleWorlds.Starter` 所在的地方，外加**所有没有被其他命名空间规则认领的类型** —— 它是这套分类法的兜底桶。

兜底这件事有实际后果：这个目录里既有 `AssemblyLoader` 这种"你必须知道它存在"的类型，也有一些 BCL 噪声混进来。如果一个类型的命名空间你没印象，先怀疑它在 `core-extra`。

方向性规则：`TaleWorlds.Core` 里没有任何 `Hero` 引用。箭头永远是 campaign → core，不是反过来。

## 本区页面（2）

| 页面 | 讲的是什么 |
| --- | --- |
| [Game](./Game) | 进入运行中游戏的静态入口 |
| [ViewModel](./ViewModel) | 所有 Gauntlet 绑定所派生的属性通知基类 |

这 2 页不是随便挑的：`Game` 是"游戏跑起来了没有"的判断点，`ViewModel` 是所有界面的绑定基类。两者都是模组作者在别处遇到引用时需要回头查的类型。

英文树里没有本区页面。

## 尚未收录

按命名空间属于这个桶、但没有页面的东西，是整个文档树里最长的一条尾巴：

- **程序集与平台**：`AssemblyLoader`（程序集解析与依赖）、`ApplicationPlatform`、`BasePath`、`BuildInfo`、`AreaInformation`、`AmbientInformation`。
- **事件与任务**：`AsyncRunner`、`AwaitableAsyncRunner`、`Task` 一族、`MBEventManager` 与它的事件基础设施。
- **集合与工具**：`LinQuick` 的 3 个类型、`MBReadOnlyList` 一族、`MBFastList`。
- **核心枚举与数据**：`AgentState`、`AgentFlag`、`AgentMovementMode`、`AgentOriginType`、`ArmorComponent`、`Banner`、`ItemQuality` 等等一批跨层共用的枚举。
- **`TaleWorlds.DotNet` 的绑定层**：`BindingPath`、`ViewModelPathAttribute`、`MBDebug` 一类的属性绑定基础设施 —— 注意 `MBDebug` 落在 [engine](../engine/)，不是这里。

按规模算，兜底桶加起来大约 54 个有文档的类型，现在是 2 个。

## 相邻目录

[core](../core/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [SDK 总览](../../architecture/sdk-overview)