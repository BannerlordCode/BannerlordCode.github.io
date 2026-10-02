---
title: "Bannerlord v1.4.6 — 版本落地页"
description: "v1.4.6 是什么版本、相对 1.4.5 / 1.3.15 的定位、mod 从哪一层开始读，以及按任务划分的入口表。"
---
# Bannerlord v1.4.6

## 这是什么版本

v1.4.6 是 1.4.x 补丁线上的一个版本。它的源码树 `bannerlord-1.4.6/` 有一个此前版本都没有的特点：**顶层目录名就是模块/程序集名**，目录内部直接按命名空间分层。1.4.5 的源码是 `bannerlord-1.4.5/Bannerlord.Source/{bin,Modules.*}`，核心程序集在 `bin/`、玩法模块散在 `Modules.SandBox/`、`Modules.Multiplayer/` 等目录里；1.4.6 把这套两级结构拆平了。

文档分区**不按源码目录名**命名，而是按子系统归入固定的 17 个桶（权威映射 `tools/_dir-map-canonical.json`，最长前缀优先 + 少量类型名覆写）：

```
bannerlord-1.4.6/TaleWorlds.CampaignSystem/   ↔   /v1.4.6/zh/api/campaign/
bannerlord-1.4.6/TaleWorlds.ScreenSystem/     ↔   /v1.4.6/zh/api/gui/
bannerlord-1.4.6/TaleWorlds.SaveSystem/       ↔   /v1.4.6/zh/api/save-system/
bannerlord-1.4.6/TaleWorlds.MountAndBlade/    ↔   /v1.4.6/zh/api/mission-ext/   （Mission / Agent / MissionBehavior 另归 mission/）
bannerlord-1.4.6/TaleWorlds.ObjectSystem/     ↔   /v1.4.6/zh/api/campaign-ext/
bannerlord-1.4.6/TaleWorlds.Core/             ↔   /v1.4.6/zh/api/core-extra/     （MBSubModuleBase / Module 另归 core/）
```

一个源码命名空间会落进哪个桶由规则决定，**不是目录名小写化**；因此「找类型」要走 [模块地图](architecture/module-map/) 的映射表，而不是猜目录名。

规模（源码核实，非估计）：顶层 90 个目录 / 其中 71 个玩法模块目录（`TaleWorlds.*`、`SandBox`、`StoryMode`）/ 全树 11385 个 `.cs` 文件 / 这 71 个模块下按文件去重、排除 `Properties/` 后的类型文件 6478 个。

## 相对其它版本的定位

| 版本 | 文档定位 | 你什么时候该用这个版本的文档 |
| --- | --- | --- |
| **v1.4.6** | 本页。1.4.x 补丁线的最新源码快照，模块目录结构最新 | 你手上的游戏就是 1.4.6，或者你要对照平铺后的模块目录找代码 |
| **v1.4.5** | 同一产品线的上一个补丁版，源码仍是 `bin/` + `Modules.*/` 布局 | 你要确认某个类型是「1.4.5 就有」还是「1.4.6 才出现」 |
| **v1.3.15** | 长期稳定线，深度架构文档最完整 | 你的 mod 面向 1.3.15 玩家，或者你要的是经过长期打磨的分层心智模型 |

一句话：**1.4.6 相对 1.4.5 的最大变化是源码布局与少量新增工具程序集，玩法 API 基本是增量的**（详见 [版本差异](architecture/version-delta/)）。

## mod 从哪开始读

不要从 A–Z 类名墙开始。按这四步走，每一步都只解决一个问题：

1. **分层**：读 [SDK 分层概览](architecture/sdk-overview/)，确认你这次改动属于 Foundation / Campaign / Mission / UI / Save 哪一层。这一步决定你后面能拿到什么对象、对象活多久。
2. **定位模块**：读 [模块地图](architecture/module-map/)，找到负责这个职责的模块目录。1.4.6 里这一步特别短——目录名就是程序集名。
3. **迁移判断**：如果你的 mod 还要同时支持 1.3.15 或 1.4.5，读 [版本差异](architecture/version-delta/) 的迁移清单，确认你依赖的成员没有消失。
4. **查具体类**：进 API 分区，按模块 A–Z 目录找到类型页，看「心智模型 / 关键成员 / 风险与边界」。

## 按任务找入口

| 我想做的事 | 先读这一页 | 再进这个模块 |
| --- | --- | --- |
| 让模块在正确阶段加载、拿到游戏根 | [SDK 分层概览](architecture/sdk-overview/) | [模块入口 core/ 与 core-extra/](api/core/) |
| 在战役里挂行为、监听事件 | [SDK 分层概览](architecture/sdk-overview/) | [战役 campaign/](api/campaign/) · [扩展 campaign-ext/](api/campaign-ext/) |
| 处理一场战斗里的 Agent / 行为 | [SDK 分层概览](architecture/sdk-overview/) | [mission/ 与 mission-ext/](api/mission-ext/) |
| 做界面、加一层 Screen 或 ViewModel | [SDK 分层概览](architecture/sdk-overview/) | [界面 gui/](api/gui/) · [渲染 engine/](api/engine/) · [ViewModel viewmodel/](api/viewmodel/) |
| 存档字段、读档、类型定义 | [SDK 分层概览](architecture/sdk-overview/) 的 Save 段 | [存档 save-system/](api/save-system/) |
| 按 MBGUID 取对象 / 注册类型 | [模块地图](architecture/module-map/) 的对象系统段 | [对象系统 campaign-ext/](api/campaign-ext/) |
| 本地化文本、变量替换 | [SDK 分层概览](architecture/sdk-overview/) | [本地化 localization/](api/localization/) |
| 数学、集合、日志等基础工具 | [模块地图](architecture/module-map/) | [基础库 core-extra/](api/core-extra/) |
| 判断输入键位怎么来的 | [模块地图](architecture/module-map/) 的输入段 | [输入 system/](api/system/) |
| 查 1.4.6 比 1.4.5 / 1.3.15 多了什么 | [版本差异](architecture/version-delta/) | — |

> 上表 API 列的分区页由 API 批次生成；若你此刻打不开某个分区，回到本页与 [架构总览](architecture/) 继续，架构页不依赖 API 分区。

## 导航

- ↔ 兄弟 / Sibling：[English](../en/) · [v1.4.5](../../v1.4.5/) · [v1.3.15](../../v1.3.15/)
- ↓ 下级 / Down：[架构总览](architecture/) · [API 参考](api/)
- ↔ 跨版本：[逐类 API 对比](../../versions/)
- ⬆ 站点：[首页](../../)