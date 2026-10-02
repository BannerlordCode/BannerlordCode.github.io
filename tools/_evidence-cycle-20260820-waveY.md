# Evidence — cycle 2026-08-20 (wave Y, part 1: 对象图 Load/Save 数据页)

## Scope
手写接管 save-system 的对象图 Load/Save 数据页（13 页），直接服务场景测试 #3（自定义存档字段不坏档）链路贯通。

## 基线 → 终态（`tools/_tmp_classify_save.mjs`，save-system 108 页）
| 指标 | Before | After | Δ |
|------|--------|-------|---|
| deep_pass | 25 | 38 | +13 |
| stub | 81 | 68 | −13 |
| other | 2 | 2 | 0 |
| TOTAL | 108 | 108 | 0 |

## 本波转 deep_pass 的 13 页
LoadData · ObjectHeaderLoadData · ContainerHeaderLoadData · ElementLoadData · ElementSaveData ·
FieldLoadData · FieldSaveData · MemberLoadData · MemberSaveData · PropertyLoadData ·
PropertySaveData · VariableLoadData · VariableSaveData

## 独立验证（不采信代理自报）
- `node tools/_tmp_classify_save.mjs` → `deep_pass=38 stub=68`，13 页全部进入 deep_pass，无 deep_pass 流失。
- 禁止样板句 grep（覆盖 13 页）：`阅读时先通过属性了解状态` / `SomeValue` / `service = ...` / `null; // 替换` / `先通过子系统 API` / `从实际子系统 API` / `是 TaleWorlds…的公开类型` → **0 命中**。
- 链接审计：`AUDIT_MODE=url AUDIT_CONTENT_ROOT=content/v1.3.15/zh/api node tools/audit-links.mjs`
  - 首跑发现 7 个断链：Agent A 7 页误用 `../architecture/save-system`（应为 3 层 `../../../architecture/save-system`）。
  - 修正并归一化后复跑：`BROKEN_LINKS=0` `RESOLVE_NEITHER=0` `FILES_WITH_BROKEN=0`。
- 抽检 2 页（`FieldLoadData.md` / `LoadData.md`）逐行复核：心智模型 >80 字、依赖图 ≥2 链接且全部解析、真实 C# 示例含 `SaveManager` 令牌 + `.Method` 调用、源方法名真实（如 `InitializeReaders`/`FillObject`/`GetMemberTypeId`/`GetDataToUse`/`SetValue`/`SaveManager.Load`）、风险段写实（成员 id 冲突、类型转换失败、版本不匹配、只读信封）。

## 场景 #3 可答性
本波补齐对象图数据页后，存档往返链路已全手册贯通：
`SaveableTypeDefiner` + `SaveableField/PropertyAttribute` → `SaveContext`/`ObjectSaveData`（收集写出，wave U/W）
→ `LoadData`（根信封，本波）→ `LoadContext` → `ObjectLoadData` → `FieldLoadData.FillObject`（`FieldInfo.SetValue` 写回，本波）。
风险段覆盖：成员 id 冲突、类型不兼容且 `TryConvertType` 失败、版本/模组不匹配、readonly 字段。
只读文档即可指出正确入口类、关键方法与崩溃/坏档边界，无需打开 IDE。

## 已知限制 / 下一入口
- save-system 仍 68 stub：含 `BasicTypeSerializer` 家族（~21 impl + `IBasicTypeSerializer`，下一波 wave Y2），以及定义/ID/扩展类（`FieldDefinition`/`PropertyDefinition`/`MemberDefinition`/`ContainerType`/`EntryId`/`SaveEntry*`/`SaveFolderExtension`/`MetaDataExtensions`/`SaveableBasicTypeDefiner`/`SaveableInterfaceAttribute`/`SaveCodeGenerationContext*`/`Legacy*` 等）。
- 4 项战略决策仍挂起待用户裁决（覆盖口径 / campaign 去重等）。
- 未 commit（driver 规定除非用户要求）。
