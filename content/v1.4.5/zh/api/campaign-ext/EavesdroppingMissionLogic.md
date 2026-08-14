---
title: "EavesdroppingMissionLogic"
description: "v1.4.5 StoryMode 伪装/窃听任务里的 MissionLogic，按队列播放预埋角色的配音与字幕并切换窃听摄像机。"
---
# EavesdroppingMissionLogic

**命名空间:** `SandBox.Missions`  
**模块:** `SandBox.Missions`  
**类型:** `public class EavesdroppingMissionLogic : MissionLogic`  
**源码:** `Modules.SandBox/SandBox/SandBox.Missions/EavesdroppingMissionLogic.cs`

## 概述

`EavesdroppingMissionLogic` 是 StoryMode 伪装/窃听任务中的一段 `MissionLogic`，负责在玩家触发 `start_eavesdropping` 事件后，按固定队列播放两名伪装角色（盯梢目标与被冒充的军官）的配音与字幕（`MBInformationManager.AddQuickInformation`），并把镜头切到场景里预埋的 `eavesdropping_point` 摄像机。它内部维护一个声音队列、一个等待计时器和当前播放的 `SoundEvent`；队列播完或事件结束后，清理占用 `StandingPoint` 的用户并停用触发机。

## 心智模型

把它看作“一段脚本化的窃听播片控制器”，而不是通用 AI 或 gameplay 系统：

- 它在 `AfterStart` 时扫描场景里带 `eavesdropping_point` 标签的 `EventTriggeringUsableMachine`，并为每个点从其 `customcamera` 子实体创建一台 `Camera` 存入字典，作为播放时的机位。
- 真正的播放由 `GenericMissionEvent`（事件 id 为 `start_eavesdropping`）触发；触发参数的第一个 token 是点的 tag，用来定位具体哪台机器。
- 播放循环在 `OnMissionTick` 里驱动：靠 `_waitTimer` 控制每条之间的间隔，上一条还在播就不切下一条；队列清空后复位状态、停用触发机、把占用的 `StandingPoint` 用户踢出。
- 构造函数接收两个 `CharacterObject`（盯梢目标与被冒充军官），并立即向 `Game.Current.EventManager` 注册 `GenericMissionEvent` 监听器；`OnEndMission` 中反注册。

因此它的生命周期是“进入任务 → 收集机位 → 等事件 → 播片 → 复位”，没有持续的世界状态修改。

## 关键成员

### 嵌套类型 `EavesdropSound`

队列里的单条配音：包含 `TextObject Line`（字幕）、`int Priority`、`CharacterObject Character`（说话人）与 `string SoundPath`。构造时会把相对路径拼成完整 ogg 路径：`BasePath.Name + "Modules/StoryMode/ModuleData/Languages/" + soundPath + ".ogg"`。

### `AfterStart`

扫描场景，把每个 `eavesdropping_point` 对应的摄像机参数读入字典：

```csharp
List<GameEntity> entities = new List<GameEntity>();
Mission.Current.Scene.GetAllEntitiesWithScriptComponent<EventTriggeringUsableMachine>(ref entities);
foreach (GameEntity entity in entities)
{
    if (!entity.HasTag("eavesdropping_point")) continue;
    var usable = entity.GetFirstScriptOfType<EventTriggeringUsableMachine>();
    Camera camera = Camera.CreateCamera();
    entity.GetFirstChildEntityWithTag("customcamera")
          .GetCameraParamsFromCameraScript(camera, ref Vec3.Invalid);
    _eavesdroppingPoints.Add(usable, camera);
}
```

### `OnGenericMissionEventTriggered` 与 `StartEavesdropping`

事件回调校验事件 id 后，用参数 tag 在场景里找到对应机器并启动播放；`StartEavesdropping` 向队列压入若干硬编码的 `EavesdropSound`（角色对话行），设置计时器、置 `EavesdropStarted = true` 并选定机位摄像机。

### `OnMissionTick(float dt)`

每帧推进播放：计时器到点且当前声音不在播时，要么出队下一条（弹字幕 + 播放 `SoundEvent`），要么队列空了就复位状态、把触发机上的用户 `StopUsingGameObject` 并禁用 `start_eavesdropping` 事件脚本。

## 依赖

- [MissionLogic](../../mission-ext/MissionLogic) 提供 `AfterStart` / `OnMissionTick` / `OnEndMission` 的 MissionLogic 契约。
- [Mission](../../mission/Mission) 暴露 `Current.Scene` 与 `CurrentTime`，是场景实体与计时的来源。
- [MissionBehavior](../../mission/MissionBehavior) 是其逻辑基类；本逻辑通过 `Mission.Current.GetMissionBehavior<T>()` 被其他逻辑或脚本获取。
- [EventTriggeringUsableMachine](../../mission-ext/EventTriggeringUsableMachine) 是预埋的窃听点与触发机，字典的键类型。

## 真实获取与扩展路径

任务逻辑或对话脚本通过 mission behavior 检索拿到它，而不是自己 new：

```csharp
var logic = Mission.Current.GetMissionBehavior<EavesdroppingMissionLogic>();
if (logic != null && !logic.EavesdropStarted)
{
    // 让场景里的某个 GenericMissionEvent 脚本派发 start_eavesdropping 即可启动
}
```

若要新增窃听对话行，应在 `StartEavesdropping` 里继续向 `_eavesdropSoundQueue` 入队 `EavesdropSound`，并确保对应 ogg 已置于 `Modules/StoryMode/ModuleData/Languages/` 下；机位则通过在场景里放置带 `eavesdropping_point` 标签与 `customcamera` 子实体的可用机器来扩展。

## 风险与边界

- 播放完全依赖场景里存在带正确标签的 `EventTriggeringUsableMachine` 与 `customcamera` 子实体；缺失会导致字典为空、镜头切换失败，但逻辑不会抛异常。
- 队列里的配音行是硬编码字符串与固定 SoundPath，移植或本地化时这些路径与 `BasePath.Name` 拼接规则必须保持一致，否则声音文件加载失败。
- `OnMissionTick` 在 `EavesdropStarted` 为 false 时直接返回，因此重复触发 `start_eavesdropping` 不会叠加播放；但触发机脚本在播放结束后被禁用，重新进入需要重新启用。
- 它不负责任务成败判定，只负责“演出”；窃听任务的进度与奖励仍由对应的任务/quest 逻辑处理。

## 版本说明

本文依据 v1.4.5 源码。该逻辑与 StoryMode 任务脚本强耦合（事件 id、标签、音频路径均为约定），移植到其他版本时要重新核对这些字符串与场景约定。

## 导航

- 父级：[Campaign extension API](../)
- 相关：[MissionLogic](../../mission-ext/MissionLogic) · [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [EventTriggeringUsableMachine](../../mission-ext/EventTriggeringUsableMachine)
- English: [EavesdroppingMissionLogic](../../../../en/api/campaign-ext/EavesdroppingMissionLogic)
