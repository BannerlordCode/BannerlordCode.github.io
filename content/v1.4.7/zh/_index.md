---
title: "Bannerlord v1.4.7 文档"
description: "按命名空间全覆盖重建的 1.4.7 模组开发文档：19 个 API 子系统目录、五张架构图、实测的版本差异。"
---
# Bannerlord v1.4.7 文档

## 这是什么

v1.4.7 是 1.4 系列的一个小版本增量。对模组作者来说，它和 1.4.5 的差别**几乎全是增量**：API 层面没有类型被删除（实测：两边都覆盖的 361 个命名空间里，删除数为 0），新增的类型里 80% 以上还是 `System.*` 之类的噪声。

真正变化的是**文档的组织方式**。本站的 1.4.7 树按命名空间重新划分成 19 个子系统目录，一个类型只属于一个目录。1.4.5 的树里有 2,199 个重复的类型名、513 个命名空间里有 171 个被拆散到多个目录 —— 点进去像跳到别的地方、再也回不来，是这个结构造成的，不是内容的问题。

## 和 1.4.5 / 1.3.15 的差别

| | 1.3.15 | 1.4.5 | 1.4.7 |
| --- | --- | --- | --- |
| 源码 `.cs` 数量 | 5,196 | 8,583（转储不完整） | 11,387 |
| 对模组有破坏的删除 | — | — | 1.3.15 → 1.4.7 共 9 个类型消失，其中 `EquipmentFlags` 与 `MissionAgentSpawnLogic` 最值得检查 |
| 文档目录 | A–Z 类型列表 | 22 个手写目录，彼此重复 | 19 个按命名空间规则生成的目录 |
| 同一类型多 URL | 无 | **2,199 个类型名重复** | **0**（硬约束） |

完整数据、测量方法和 4 处已知 URL 断裂见 [版本差异](./architecture/version-delta)。

## 模组作者从这里开始

| 我想做的事 | 先读 | 再读 |
| --- | --- | --- |
| 让模组被加载 | [模块系统](./architecture/module-system) | [Core](./api/core/) |
| 在战役里挂行为 | [模块系统](./architecture/module-system) | [Campaign-Ext](./api/campaign-ext/) |
| 改钱、关系、部队 | [Campaign-Ext](./api/campaign-ext/) | [Campaign](./api/campaign/) |
| 做界面 | [界面栈](./architecture/ui-stack) | [GUI](./api/gui/) |
| 存自己的数据 | [存档系统](./architecture/save-system) | [Save System](./api/save-system/) |
| 搞清楚引用哪个程序集 | [SDK 总览](./architecture/sdk-overview) | [API 参考](./api/) |
| 排查升级后炸了 | [版本差异](./architecture/version-delta) | [跨版本类对比](../../versions/) |

## 这个站的导航是树状的

任何一个页面都能一步步走回根，再从根走到任意页面：

```text
类型页 → 同目录索引 → 19 个子系统目录 → API 参考 → 版本首页 → 站点首页
```

每一跳都是一个真实的相对链接；每个目录都有自己的 `_index.md` 索引页，索引页再链回父级和相邻目录。所以"跳过去回不来"在这个树里是被结构性排除的，而不是靠运气。

## 全部目录

### 架构

- [架构总览](./architecture/) — 五张图的总入口
- [SDK 总览](./architecture/sdk-overview) — 程序集分层与引用地图
- [模块系统](./architecture/module-system) — Module 与 MBSubModuleBase
- [存档系统](./architecture/save-system) — SaveManager 与类型注册
- [界面栈](./architecture/ui-stack) — ScreenSystem / Gauntlet / ViewModel
- [版本差异](./architecture/version-delta) — 1.4.7 vs 1.4.5 vs 1.3.15

### API 参考

- [API 参考](./api/) — 19 个子系统目录的入口表
- [core](./api/core/) — 2 页
- [core-extra](./api/core-extra/) — 56 页
- [mission](./api/mission/) — 4 页
- [mission-ext](./api/mission-ext/) — 518 页
- [campaign](./api/campaign/) — 194 页
- [campaign-ext](./api/campaign-ext/) — 73 页
- [gui](./api/gui/) — 75 页
- [save-system](./api/save-system/) — 28 页
- [viewmodel](./api/viewmodel/) — 357 页
- [localization](./api/localization/) — 24 页
- [engine](./api/engine/) — 42 页
- [system](./api/system/) — 6 页
- [custombattle](./api/custombattle/) — 21 页
- [modulemanager](./api/modulemanager/) — 6 页
- [network](./api/network/) — 6 页
- [sandbox](./api/sandbox/) — 321 页
- [storymode](./api/storymode/) — 74 页
- [activitysystem](./api/activitysystem/) — 6 页
- [achievementsystem](./api/achievementsystem/) — 4 页

## 参见

- ↔ [English](../en/)
- ↘ [跨版本类对比](../../versions/)
- ↘ [v1.4.5 文档](../../v1.4.5/) · [v1.3.15 文档](../../v1.3.15/) · [v1.3.0 文档](../../v1.3.0/)
