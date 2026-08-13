---
title: "core 目录"
description: TaleWorlds.Core 核心数据类型类参考目录，含模块心智模型与枚举/结构体值类型速查。
---

## 心智模型

`core` 是整座 API 的“地基词汇表”所在。在 TaleWorlds.Core 命名空间里，它集中承载了所有上层模块都要反复使用的底层原语：向量与矩阵数学（Vec2 / Vec3 / Mat3 / MatrixFrame）、通用容器（MBList / MBReadOnlyList），以及贯穿全引擎的异常体系（MBException 家族），还有下文速查表里的战斗 / 物品 / 角色 / 锻造枚举与轻量结构体。任何一个模块方法签名里出现的 `Vec2`、`MBList`、`DamageTypes`，它们的定义都来自这一层——它是各桶之间能“互相听懂”的共同语言，也是依赖图最底层的叶子，几乎不被其他模块等待，反而是所有人都在引用它。

在本站点的文档切分中，`core` 桶本身只收录了最贴近“模组引导与游戏物件基类”的少数类型（ItemObject、MBSubModuleBase、Module）；而上述那套数学 / 集合 / 异常的真正文档被拆分到了 `../core-extra/`。理解这一点很关键：阅读本桶时你看到的是命名空间的“入口门面”，真正的底层词汇表要去 `core-extra` 查阅。

## 核心入口类型

本站 `core` 桶自身收录的引导型类型：

- [ItemObject](./ItemObject) — 所有可量化游戏物件的抽象基类（武器、护甲、坐骑等均派生自此）。
- [MBSubModuleBase](./MBSubModuleBase) — 模组的引导基类，`Initialize` / `OnSubModuleLoad` 是几乎每个 Mod 的起点。
- [Module](./Module) — 描述一个游戏模块（Module）的元数据与装配信息。

而 `core` 命名空间真正的“共享词汇表”位于 `../core-extra/`，其中最常用的入口类型包括：

- [Vec2](../core-extra/Vec2) — 二维向量，坐标、朝向、速度差最频繁的载体。
- [Vec3](../core-extra/Vec3) — 三维向量，世界空间位置与位移的基础。
- [Mat3](../core-extra/Mat3) — 3×3 旋转 / 缩放矩阵。
- [MatrixFrame](../core-extra/MatrixFrame) — 旋转矩阵 + 平移组成的变换帧，场景物体位姿的标准表达。
- [MBList](../core-extra/MBList) — 引擎内部最常见的可变列表容器，大量 API 直接返回它。
- [MBReadOnlyList](../core-extra/MBReadOnlyList) — 只读视图，用于安全地暴露内部集合。
- [MBException](../core-extra/MBException) — 引擎级异常基类，几乎所有 Core 抛错都继承自它。
- [MathF](../core-extra/MathF) — 单精度浮点数学工具集（Clamp、Lerp、Sqrt 等）。
- [MBMath](../core-extra/MBMath) — 更高层数学辅助（夹角、插值、投影等）。

## Core 值类型速查（枚举与结构体）

下面这些 `TaleWorlds.Core` 的枚举与轻量结构体是上层业务每天都在传递的“数据词汇”：战斗用 `AgentAttackType` / `DamageTypes`、物品用 `ItemTypeEnum` / `WeaponClass`、角色用 `BodyProperties` / `EquipmentElement`、锻造用 `CraftingMaterials`。它们本身不持有逻辑，只是被 Action / Model / Mission 读取与比较的纯数据——直接构造即可，不需要通过某个管理器获取。每个类型给出用途与典型出现时机；需要逐成员语义时回 `core-extra` 或源码。

| Type | Purpose | Timing |
| --- | --- | --- |
| `TaleWorlds.Core.AgentAttackType` | 近战攻击分类：Standard 普通挥砍、Kick 踢击、Bash 盾击、Collision 碰撞；命中结算时区分伤害来源。 | 命中 / 格挡结算 |
| `TaleWorlds.Core.AgentState` | Agent 的生命阶段（活动 / 倒地 / 死亡等），决定其能否被选中或参与逻辑。 | Mission 生命周期内 |
| `TaleWorlds.Core.AgentFlag` | 位标志描述 Agent 能力与状态（可否战斗、是否 NPC 等），创建后常被查询。 | 创建 Agent / 每帧查询 |
| `TaleWorlds.Core.AgentMovementMode` | Agent 移动方式（站立 / 行走 / 奔跑 / 骑乘等），驱动移动与动画。 | 移动系统每帧 |
| `TaleWorlds.Core.AgentControllerType` | 控制来源（AI / 玩家 / 网络），决定输入由谁提供。 | 创建或接管 Agent |
| `TaleWorlds.Core.BattleSideEnum` | 战斗阵营侧（攻击 / 防守 / 中立等），用于分队、计分与胜负。 | 战斗初始化 / 结算 |
| `TaleWorlds.Core.BattleState` | 战斗整体状态机（进行中 / 胜负 / 结束），驱动 Mission 战斗流程。 | Mission 战斗逻辑 |
| `TaleWorlds.Core.DamageTypes` | 伤害种类：Cut 劈、Pierce 穿刺、Blunt 钝、Invalid；决定护甲减免与受击反馈。 | 伤害计算 / 受击 |
| `TaleWorlds.Core.StrikeType` | 攻击部位与方式分类（横扫 / 直刺等），影响命中判定与动画。 | 攻击命中结算 |
| `TaleWorlds.Core.TeamSideEnum` | 队伍阵营侧，比 BattleSide 更贴近队伍编组与友伤判断。 | 组队 / 战斗内 |
| `TaleWorlds.Core.FormationClass` | 阵型职能（步兵 / 弓手 / 骑兵等），决定编队位置与战斗 AI。 | 编队 / 部署 |
| `TaleWorlds.Core.FormationFilterType` | 阵型筛选维度（按兵种 / 距离等），用于构建子集阵型。 | 阵型构建 |
| `TaleWorlds.Core.TroopType` | 单位大类（步兵 / 骑兵 / 弓手 / 掷矛），影响装备与行为树。 | 编队 / 角色创建 |
| `TaleWorlds.Core.TroopUsageFlags` | 单位可用场景标志（攻城 / 野战 / 巡逻等），调度时检查。 | 部队调度 |
| `TaleWorlds.Core.TroopTraitsMask` | 单位特质掩码（经验 / 精英等），用于匹配与加成。 | 角色生成 |
| `TaleWorlds.Core.ItemTypeEnum` | 物品大类（武器 / 护甲 / 坐骑 / 物资），驱动分类、市场与栏位。 | 物品创建 / 商店 |
| `TaleWorlds.Core.ItemFlags` | 物品行为标志（可否交易 / 是否消耗等），交易与栏位逻辑检查。 | 物品定义 / 交易 |
| `TaleWorlds.Core.ItemQuality` | 物品品质档（劣质 / 普通 / 精良 / 大师），影响属性与价格。 | 掉落 / 制造 |
| `TaleWorlds.Core.ItemTiers` | 物品等级（T1–T6 等），用于平衡、定价与掉落权重。 | 掉落 / 定价 |
| `TaleWorlds.Core.ItemUsageSetFlags` | 武器使用方式集合（单手 / 双手 / 长杆等），决定握持与招式。 | 武器装配 |
| `TaleWorlds.Core.WeaponClass` | 武器形态（刀 / 枪 / 弓 / 弩等），影响伤害曲线与动画。 | 战斗 / 装备 |
| `TaleWorlds.Core.WeaponFlags` | 武器功能标志（可否格挡 / 是否远程等），战斗与装配检查。 | 武器定义 |
| `TaleWorlds.Core.WeaponTiers` | 武器等级分类，参与平衡与掉落。 | 掉落 / 商店 |
| `TaleWorlds.Core.EquipmentIndex` | 装备槽位索引（头 / 身 / 手 / 腿 / 武器槽等），定位角色装配。 | 换装 / 读取装备 |
| `TaleWorlds.Core.EquipmentType` | 装备类别（武器 / 护甲 / 坐骑），决定槽位与适用。 | 装备系统 |
| `TaleWorlds.Core.EquipmentFlags` | 装备槽位行为标志（可否卸下 / 是否固定等）。 | 装备系统 |
| `TaleWorlds.Core.ArmorMaterialTypes` | 护甲材质（布 / 皮 / 链 / 板），决定减免曲线与重量。 | 伤害结算 |
| `TaleWorlds.Core.BodyProperties` | 角色外观与体型参数（年龄 / 体重 / 特征），用于生成与存档。 | 角色创建 / 存档加载 |
| `TaleWorlds.Core.DynamicBodyProperties` | 随年龄或状态变化的动态体型部分。 | 角色成长 tick |
| `TaleWorlds.Core.StaticBodyProperties` | 序列化稳定的固定外观种子（面部 / 发型），存档不变。 | 角色创建 / 存档 |
| `TaleWorlds.Core.EquipmentElement` | 装备槽中的单件（物品 + 槽位），是 TroopRoster 基本单元。 | 换装 / 名册操作 |
| `TaleWorlds.Core.ItemRosterElement` | 物品名册中的一项（物品 + 数量），用于队伍与城镇库存。 | 库存增减 |
| `TaleWorlds.Core.UniqueTroopDescriptor` | 唯一标识一个具体角色实例（含种子），用于存档与引用。 | 存档 / 引用英雄 |
| `TaleWorlds.Core.Property` | 角色单项基础属性值（力量 / 敏捷等），升级时增减。 | 角色成长 |
| `TaleWorlds.Core.DrivenProperty` | 由属性与技能推导的战斗驱动参数（速度 / 精度等）。 | 战斗准备 |
| `TaleWorlds.Core.SkillType` | 技能大类（个人 / 场景 / 专属），决定增长与效果。 | 技能系统 |
| `TaleWorlds.Core.CraftingMaterials` | 锻造材料类型（铁 / 硬木 / 炭等），决定可锻造部件。 | 锻造界面 |
| `TaleWorlds.Core.CraftingStatTypes` | 武器属性维度（伤害 / 速度 / 长度等），平衡与排序用。 | 锻造 / 平衡 |
| `TaleWorlds.Core.TerrainType` | 地形分类（平原 / 森林 / 山地），影响移动速度与战斗。 | 地图 / 场景加载 |
| `TaleWorlds.Core.MissionMode` | 任务模式（训练 / 战斗 / 围城等），决定 Mission 行为与 UI。 | Mission 启动 |
| `TaleWorlds.Core.MissionInitializerRecord` | 描述如何初始化一场 Mission 的记录（地图 / 阵营 / 参数）。 | Mission 创建 |
| `TaleWorlds.Core.State` | 通用状态枚举，多用于 UI 与状态机分支。 | 状态机 / UI |
| `TaleWorlds.Core.ManagedParametersEnum` | 引擎可调参数键（画质 / 手感等），设置系统读写。 | 设置系统 |
| `TaleWorlds.Core.UndoRedoKey` | 撤销 / 重做操作标识（锻造与编辑器）。 | 编辑器交互 |
| `TaleWorlds.Core.TutorialContexts` | 教程触发上下文，控制提示何时出现。 | 教程系统 |
| `TaleWorlds.Core.RelevantContextType` | 相关上下文类型，UI 与逻辑判定时区分场景。 | 上下文判定 |
| `TaleWorlds.Core.BannerColor` | 旗帜颜色数据（struct），用于纹章着色。 | 旗帜系统 |
| `TaleWorlds.Core.BannerIconData` | 旗帜图标数据（struct），定位纹章图形。 | 旗帜系统 |
| `TaleWorlds.Core.AgentSaveData` | Agent 的存档数据快照（struct），序列化战斗单位。 | 存档 |
| `TaleWorlds.Core.CampaignSaveMetaDataArgs` | 战役存档元数据参数（struct），记录存档版本与信息。 | 存档元信息 |
| `TaleWorlds.Core.GameTypeLoadingStates` | 游戏类型加载阶段枚举，模块装配流程用。 | 模块加载 |
| `TaleWorlds.Core.GameManagerLoadingSteps` | 管理器加载步骤枚举，引导启动顺序。 | 引擎启动 |

## 与其他模块的关系

`core` 是依赖图最底层：engine、campaign、module 等所有桶都在 import 它的类型。你在 `../engine/` 里看到的 `Camera`、`BoundingBox`，其参数几乎全是 `Vec3` / `MatrixFrame`；`../core-extra/` 里的容器与数学工具则是上层逻辑拼装数据的积木。可把 `core` + `core-extra` 视为引擎的“标准库”，上层业务模块都是在这套词汇之上二次表达。

关于崩溃与异常边界——MBException 家族如何被捕获与上报——详见架构文档 [崩溃边界](../../architecture/crash-boundaries/)；若想从零理解一个 Mod 如何通过 `MBSubModuleBase` 接入引擎，可回看 [模块系统](../../architecture/module-system/)。

<!-- BEGIN SECTION INDEX -->

## ↑ 上级导航

- [API 参考](../)
- [版本首页](../../)

## ↓ 子类列表 — 按字母分组

### M

- [MBSubModuleBase](./MBSubModuleBase)
- [Module](./Module)


<!-- END SECTION INDEX -->
