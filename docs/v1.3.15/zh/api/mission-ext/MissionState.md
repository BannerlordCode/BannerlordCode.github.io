<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionState`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionState

**命名空间:** TaleWorlds.MountAndBlade  
**模块:** TaleWorlds.MountAndBlade  
**类型:** class（继?

`GameState

`?
战斗场景的顶级状态管理器。负责创建、初始化、帧驱动和销?

`Mission

` 实例，是游戏状态机中战斗场景的入口和生命周期控制器?
## 概述

`MissionState

` ?

`GameState

` 的子类，代表游戏状态机中的"战斗场景"状态。它管理一?

`Mission

` 实例的完整生命周期：?

`OpenNew

` 创建任务、经过加载初始化、每?Tick 驱动、直到任务结束并弹出状态。该类处理加载流程（分阶段更新加载进度条）、快进回放（FastForward）、暂停、多人游戏断连延迟等细节，并通过 

`IMissionSystemHandler

` 接口与外部系统（如视图层）协作?
## 
## 心智模型

先把 `MissionState` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
常量

\| 名称 \| 类型 \| ?\| 描述 \|
\|------\|------\|-------\|-------------\|
\| MissionFastForwardSpeedMultiplier \| int \| 

`10

` \| 快进模式的内部速度乘数 \|

## 静态属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| Current \| MissionState \| 当前活跃?MissionState 实例 \|
\| RecordMission \| bool \| 静态标志，控制是否录制任务回放 \|

## 实例属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|-------------\|
\| Handler \| IMissionSystemHandler \| 外部系统处理器，用于视图层等协作 \|
\| CurrentMission \| Mission \| 当前管理?Mission 实例 \|
\| MissionName \| string \| 当前任务名称 \|
\| FirstMissionTickAfterLoading \| bool \| 标记加载后的第一?Tick \|
\| Paused \| bool \| 任务是否暂停 \|
\| MissionReplayStartTime \| float \| 回放开始时?\|
\| MissionEndTime \| float \| 任务结束时间? 表示无限制） \|

## 静态方?
### OpenNew

`

`

`csharp
public static Mission OpenNew(
    string missionName,
    MissionInitializerRecord rec,
    InitializeMissionBehaviorsDelegate handler,
    bool addDefaultMissionBehaviors = true,
    bool needsMemoryCleanup = true
)
`

`

`

创建并打开一个新的战斗任务。创?

`MissionState

`，通过委托获取行为列表，添加默认行为，然后将状态压入游戏状态栈?
**参数:**
- 

`missionName

` - 任务名称
- 

`rec

` - 任务初始化记录（场景、关卡等?- 

`handler

` - 返回 MissionBehavior 集合的委?- 

`addDefaultMissionBehaviors

` - 是否添加默认行为（网络组件、基础处理器等?- 

`needsMemoryCleanup

` - 任务结束后是否需要内存清?
**返回:** 新创建的 

`Mission

` 实例?
### IsRecordingActive

`

`

`csharp
protected static bool IsRecordingActive()
`

`

`

检查当前是否应录制任务回放。服务器端取决于多人选项，单机端取决?

`RecordMission

` 标志?
## 实例方法

### OnInitialize / OnFinalize / OnActivate / OnDeactivate

`

`

`csharp
protected override void OnInitialize()
protected override void OnFinalize()
protected override void OnActivate()
protected override void OnDeactivate()
`

`

`

状态生命周期回调。`OnInitialize

` 设置静?

`Current

` 引用并启用加载窗口；

`OnFinalize

` 清理 Mission 和静态引用；

`OnActivate

`/

`OnDeactivate

` 转发?Mission?
### OnTick / OnIdleTick

`

`

`csharp
protected override void OnTick(float realDt)
protected override void OnIdleTick(float dt)
`

`

`

每帧驱动任务逻辑。`OnTick

` 处理加载阶段、正常运行阶段和结束阶段的状态转换，支持快进回放和任务超时结束。`OnIdleTick

` 在任务处?

`Continuing

` 状态时驱动空闲 Tick?
### BeginDelayedDisconnectFromMission

`

`

`csharp
public void BeginDelayedDisconnectFromMission()
`

`

`

标记需要延迟断开多人任务连接。实际的断开操作在下一?Tick 中执行?
## 使用示例

`

`

`csharp
// 打开一个新的战斗任?var record = new MissionInitializerRecord
{
    SceneName = "scene_name",
    SceneLevels = "level1 level2"
};

Mission mission = MissionState.OpenNew(
    "MyMission",
    record,
    (m) =&gt; new List&lt;MissionBehavior&gt;
    {
        new MyCustomMissionBehavior(),
        new MissionAgentPanicHandler()
    },
    addDefaultMissionBehaviors: true,
    needsMemoryCleanup: true
);

// 检查当前是否在战斗?if (MissionState.Current != null)
{
    var currentMission = MissionState.Current.CurrentMission;
    // 访问当前任务
}

// 延迟断开多人连接
MissionState.Current?.BeginDelayedDisconnectFromMission();
`

`

`

## 参见

- [DuelMissionRepresentative](./DuelMissionRepresentative.md)
- [TeamAISiegeComponent](./TeamAISiegeComponent.md)
- [WallSegment](./WallSegment.md)
- [mission-ext 类目录](../catalog-engine.md)
