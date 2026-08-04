---
title: "开发者任务路线图 - v1.4.5"
description: "按模组开发任务选择 v1.4.5 的入口、依赖链与安全边界：模块、战役、Action、Model、Mission、UI 和存档。"
---
# 开发者任务路线图（v1.4.5）

这页是入口选择器，不是类名目录。先描述你要改变的运行时状态，再沿着上游创建者、下游消费者和生命周期边界进入 API 页。完整类名仍在各模块目录中，但目录本身不能替代调用时机和风险说明。

## ↑ 父级导航

- [架构总览](../)
- [现有重建波次](../roadmap)
- [崩溃与存档边界](../crash-boundary)
- [文档契约](../doc-contract)

## 一条主线：从模块到稳定状态

```text
MBSubModuleBase
    -> Game / IGameStarter
    -> CampaignGameStarter -> CampaignBehaviorBase -> CampaignEvents
    -> Action.Apply 或 GameModels 中的规则
    -> Campaign 实体和 SaveManager

Mission -> MissionBehavior -> Agent / Team / Formation
UI -> ScreenManager / GauntletLayer -> ViewModel
```

模块回调负责接入时机，Behavior 负责持有战役状态和订阅事件，Action 负责协调世界变更，Model 负责计算规则。Mission 和 UI 有自己的寿命，不能把它们的对象当作 Campaign 的长期状态。

## 按任务找入口

### 1. 注册 SubModule，并在战役里加 Behavior

阅读顺序：

1. [MBSubModuleBase](../../api/core/MBSubModuleBase) 确认 `OnSubModuleLoad`、`OnGameStart` 等阶段。
2. [CampaignGameStarter](../../api/campaign/CampaignGameStarter) 确认 Behavior 和 Model 的注册边界。
3. [CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase) 设计 `RegisterEvents`、tick 和 `SyncData`。
4. [CampaignEvents](../../api/campaign/CampaignEvents) 选择真正的事件，而不是在每帧轮询整个世界。

一个最小的注册路径应在游戏开始回调中取得 `CampaignGameStarter`：

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    base.OnGameStart(game, starter);
    if (starter is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddBehavior(new MyCampaignBehavior());
    }
}
```

不要在 `OnSubModuleLoad` 中读取 `Campaign.Current`。此时可能只有程序集和模块元数据已加载，战役对象尚未建立。

### 2. 安全给 Hero 钱、杀人、宣战或改王国

先读 [Hero](../../api/campaign/Hero) 了解实体身份，再进入对应的 Action：

- 给钱：[GiveGoldAction](../../api/campaign-ext/GiveGoldAction)
- 杀人：[KillCharacterAction](../../api/campaign-ext/KillCharacterAction)
- 改关系：[ChangeRelationAction](../../api/campaign-ext/ChangeRelationAction)
- 改王国：[ChangeKingdomAction](../../api/campaign-ext/ChangeKingdomAction)
- 宣战：[DeclareWarAction](../../api/campaign-ext/DeclareWarAction)

真实对象应从 `Hero.MainHero`、`Hero.Find(...)` 或 Campaign 已注册对象中取得；不要伪造一个 `Hero`，也不要把 `hero.Gold += amount` 当作交易。Action 会执行验证、对象管理器更新、事件通知和相关派系/任务级联。

调用顺序是：读取实体状态 -> 检查当前 Campaign 阶段 -> 选择 `*Action.Apply` 重载 -> 让事件和下游 Behavior 完成同步。若你的代码只是回答“战争得分现在如何计算”，应读 Model，而不是调用 Action。

### 3. 添加自定义存档状态

普通 Behavior 状态从 [CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase) 的 `SyncData(IDataStore)` 开始，配合 [SaveManager](../../api/save-system/SaveManager) 了解加载顺序。只有需要定义新可存档类型或字段元数据时，才继续读 [SaveableTypeDefiner](../../api/save-system/SaveableTypeDefiner)、[SaveableFieldAttribute](../../api/save-system/SaveableFieldAttribute) 和 [SaveablePropertyAttribute](../../api/save-system/SaveablePropertyAttribute)。

Behavior 的保存示例必须使用稳定 key，并且不在保存回调中创建世界对象或调用 Action：

```csharp
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData("myModState", ref _state);
}
```

保存协议包括 key、值类型、对象的 SaveId 和加载顺序。修改其中任何一项都应先读[崩溃与存档边界](../crash-boundary)，并为旧存档决定兼容策略。

### 4. 写 MissionBehavior，并在 Agent 离场时处理

阅读 [Mission](../../api/mission/Mission)、[MissionBehavior](../../api/mission/MissionBehavior)、[Agent](../../api/mission/Agent)、[Team](../../api/mission-ext/Team) 和 [Formation](../../api/mission/Formation)。Mission 行为在 Mission 创建/初始化边界接入：

```csharp
public override void OnMissionBehaviorInitialize(Mission mission)
{
    base.OnMissionBehaviorInitialize(mission);
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

在行为内部处理 Agent 的移除/死亡回调，并在 `OnMissionEnded` 清掉引用。Mission 结束后不要把 Agent 存入 Campaign Behavior，也不要在下一场战斗继续使用上一场的 `Mission.Current`。

### 5. 判断该找 Model 还是 Action

- “应该得到什么数值？”例如党派战争得分、工资、速度、士气：从 [GameModels](../../api/campaign/GameModels) 和 [GameModelsManager](../../api/core-extra/GameModelsManager) 开始，继续到具体 `*Model`。
- “现在把世界改成另一个状态”：找对应 `*Action.Apply`，并确认它的事件级联和调用阶段。
- “按时间或事件持有自定义状态”：使用 `CampaignBehaviorBase`，通过 [CampaignEvents](../../api/campaign/CampaignEvents) 接入通知。

Model 是被多个消费者读取的策略契约；Action 是一次世界变更及其副作用的事务入口。用 Action 计算数值会重复修改世界，用 Model 直接写实体则会绕过同步。

## 其他常用路线

| 目标 | 起点 | 依赖边界 |
|------|------|----------|
| UI 面板 | [ScreenManager](../../api/gui/ScreenManager) | [GauntletLayer](../../api/engine/GauntletLayer) -> [ViewModel](../../api/core-extra/ViewModel)；UI 不直接拥有 Campaign 状态 |
| 本地化文本 | [TextObject](../../api/localization/TextObject) | 文本对象交给 UI、消息或对话生命周期管理 |
| 新建或查询 Campaign 对象 | [Campaign](../../api/campaign/Campaign) | 经过 [MBObjectManager](../../api/campaign-ext/MBObjectManager) 的注册身份，不能只靠 `new` 绕过 StringId |
| 任务逻辑聚合 | [MissionLogic](../../api/mission-ext/MissionLogic) | 只在 Mission 生命周期内消费 Agent 和场景对象 |

## 防崩检查清单

- 访问 `Campaign.Current` 前确认游戏已进入 Campaign 生命周期。
- 世界状态变化先找 `*Action.Apply`，不要直接改实体字段或集合。
- `SyncData` 只同步稳定状态，不在保存/加载期间创建对象、发起外交或重放事件。
- Agent、Mission、GauntletLayer 和 ViewModel 的引用必须在各自结束回调中释放。
- 替换 Model 时保留正确的具体类型和注册时机，不能用 `null` 取消必需规则。

## 参见

- [架构总览](../)
- [崩溃与存档边界](../crash-boundary)
- [噪声与非业务类型政策](../noise-policy)
- [SandBox/StoryMode/Native 阅读政策](../sandbox-native-policy)
- [API 参考：按任务找入口](../../api/)
