# 证据包 — cycle-20260820-waveY3（save-system 手写接管 批次 A）

> 自动化 ulw-loop 周期。本周期推进 wave Y3 批次 A：定义层 + ID/扩展层 + 接口/解析器层共 24 个 stub 手写接管。
> 复验方式：不采信子代理自报，独立跑分类器 + 严格断链审计 + 禁止句 grep + mtime 核对 + 抽页精读。

## 基线（本周期开工前）
- `save-system` TOTAL=108 `deep_pass=59` `stub=47` `other=2`

## 本周期交付（批次 A，24 页）
Agent A（定义层 + 代码生成定义器，12）：
BasicTypeDefinition, EnumDefinition, FieldDefinition, GenericTypeDefinition,
InterfaceDefinition, MemberDefinition, PropertyDefinition, StructDefinition,
TypeDefinitionBase, CustomField, SaveableBasicTypeDefiner, SaveableInterfaceAttribute

Agent B（ID/扩展层 + 接口/解析器层，12）：
SaveId, ContainerSaveId, GenericSaveId, TypeSaveId, EntryId, FolderId,
ContainerType, SavedMemberType, IArchiveContext, IConflictResolver,
IEnumResolver, IObjectResolver

## 终态复验（独立，非自报）
- 分类器 `node tools/_tmp_classify_save.mjs`：
  `TOTAL=108 deep_pass=83 stub=23 other=2` → deep_pass +24，stub 47→23
- 严格断链审计 `AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs`：
  `FILES=5632 TOTAL_LINKS=22217 BROKEN_LINKS=0 FILES_WITH_BROKEN=0`（TOTAL_LINKS 较 cycle-Y2 的 21680 +537，与 24 新页各带 ~22 链接一致）
- 禁止样板句 grep（24 目标页）：`阅读时先通过属性了解状态 | // ... | SomeValue | service = ... | IIScene | 下的公开类型` → **0 命中**
- mtime 核对：save-system 下 08-20 修改共 58 文件，其中本周期 04:36–04:40 恰为上述 24 目标页；其余 34 个 02:36–03:40 为更早 cycle（Y/Y2）已达标页，无新增连带改动 → 零越界写入
- 抽页精读（FieldDefinition.md / SaveId.md）：含真实方法名（GetValue/GetMemberType/ReadSaveIdFrom/WriteTo、0/1/2 标签分派）、真实 C# 示例含 `SaveManager.Save(Game.Current, …)`、依赖图 ≥2 真实相对链接、风险段写坏档/错位，`**类型：**` 全角冒号 + `## 依赖图` 无后缀 → 真实手写非门禁刷分

## 场景 #3 可答性（自定义存档字段不坏档）
链路已贯通：模组声明 `[SaveableRootClass(id)]` + `[SaveableField(n)]` → `SaveableTypeDefiner` 反射生成 `FieldDefinition`/`PropertyDefinition` → `SaveManager.Save(Game.Current, …)` 经 `ArchiveSerializer` 通过 `GetValue` 读值；`MemberTypeId` 须类型内唯一且跨版本稳定（否则错位/坏档）。相关手写页：SaveableRootClassAttribute、SaveableFieldAttribute、SaveablePropertyAttribute、SaveableTypeDefiner、SaveManager、FieldDefinition、MemberTypeId、ArchiveSerializer —— 全部 deep_pass 且互相可点回。仅靠文档即可指出正确入口类、关键方法、风险与链出页。

## 剩余 23 stub（= 批次 B，下一入口）
ArchiveConcurrentSerializer, BinaryWriterFactory, ISaveContext, ISavedStruct,
LateLoadInitializationCallback, LegacyGameDataDeserializer, LegacySaveContext,
LoadCallbackInitializator, LoadError, LoadInitializationCallback,
MetaDataExtensions__TaleWorlds_SaveSystem, SaveCodeGenerationContext,
SaveCodeGenerationContextAssembly, SaveEntry, SaveEntryExtension, SaveEntryFolder,
SaveError, SaveFolderExtension, SaveGameFileInfo, SaveStatistics,
StringSerializer, TypeExtensions, ZipExtensions

## 证据命令（可复跑）
```
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_tmp_classify_save.mjs
AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs
```
